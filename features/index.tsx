import CustomModal from '@/features/AddProjectModal/AddProjectModal';
import Header from '@/features/Header/Header';
import ByIcon from '@/shared/ByIcon';
import LogoWhite from '@/shared/LogoWhite';
import Scan from '@/shared/Scan';
import Section from '@/shared/Section/Section';
import Upload from '@/shared/Upload';
import { store, trpc } from '@/trpc/client';
import * as FileSystem from 'expo-file-system';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from "react-native";
import s from "./style";

export enum StatusPlan {
	CHECKED = 'CHECKED',
	REJECT = 'REJECT',
	UNDER_REVIEW = 'UNDER_REVIEW',
	IN_WORK = 'IN_WORK',
}

export default function Index() {
	const router = useRouter();
	const allPlans = trpc.plans.getAllPlans.useQuery();
	const [openModal, setOpenModal] = useState < boolean > (false);
	const [userId, setUserId] = useState < number | null > (null);
	const [name, setName] = useState < string > ('');
	const [description, setDescription] = useState < string > ('');
	const [image, setImage] = useState < string | null > (null);
	const file = trpc.plans.addFile.useMutation();
	useEffect(() => {
		const getRole = async () => {
			const id = await store.getItemAsync('id');
			setUserId(Number(id));
		};
		getRole();
	}, [setUserId]);
	// const addFile = trpc.plans.addFile.useMutation();
	const addPlan = trpc.plans.addPlan.useMutation();
	const deleteFile = async (fileUri: string) => {
		try {
			await FileSystem.deleteAsync(fileUri);
			console.log('Файл успешно удален');
		} catch (error) {
			console.error('Ошибка при удалении файла:', error);
		}
	};
	const pickImageAsync = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			// mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			base64: true,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
			const asset: ImagePicker.ImagePickerAsset = result.assets[0];
			console.log('asset', asset.uri);
			console.log('asset.fileName', asset.fileName);
			// console.log('asset.base64', asset.base64);
			if (asset.fileName && asset.base64) {
				const fileContent = {
					name: asset.fileName,
					base64: asset.base64,
				};
				const res = await file.mutateAsync(fileContent);
				setOpenModal(true);
				console.log('uriBeforeDelete', result.assets[0].uri);
				// await deleteFile(result.assets[0].uri.slice(8));
			} else {
				alert('You need to provide a photo');
			}
		}
	};
	const plan = {
		type: 'mobile' as 'mobile' | 'web',
		name,
		description,
		userId: userId || 0,
		comment: '',
		status: StatusPlan.IN_WORK,
		canvas: [{ type: '', name: '', left: 0, top: 0, width: 0, height: 0, angle: 0, }],
		photos: [''],
		underPhoto: file.data || '',
		row: {},
	};
	const savePlan = async () => {
		await addPlan.mutateAsync(plan);
		setOpenModal(false);
		setName('');
		setDescription('');
		setImage(null);
		router.push('/projects');
		await deleteFile(image || '');
	};
	const blurhash = 'LlGbn:IAM|oz?wRORjbI%NbHWBa{';
	return (
		<View style={image ? s.containerImage : s.container}>
			{image ? <Text style={s.text}>Сохранение проекта</Text> : <Header style={s.header} />}
			<View style={s.headerContainer}>
				{!allPlans.data?.length && !image && (
					<View style={s.emptyContainer}>
						<Text style={s.emptyText}>У вас пока нет загруженных проектов</Text>
					</View>
				)}
				{image && (
					<ActivityIndicator size="large" color="#0000ff" />
				)}
				{!image && (
					<View style={s.button}>
						<Section
							style={s.section}
							onPress={pickImageAsync}
							titleFirst="Загрузить из галереи"
							icon={<Upload />}
						/>
						<Section
							style={s.section}
							titleFirst="Сканировать проект"
							icon={<Scan />}
						/>
					</View>
				)}
				<View style={s.modal}>
					<CustomModal savePlan={savePlan} openModal={openModal} setOpenModal={setOpenModal} name={name} description={description} setName={setName} setDescription={setDescription} />
				</View>
				{image && <Image source={image} style={s.image} />}
			</View>
			{!image && <LogoWhite />}
		</View>
	)
}