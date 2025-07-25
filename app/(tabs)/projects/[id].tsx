

import AIModal from '@/features/AIModal/AIModal';
import Edit from '@/shared/Edit';
import { store, trpc } from '@/trpc/client';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';

const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Index() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const { id } = useLocalSearchParams();
	const [userId, setUserId] = useState<number>(0);
	useEffect(() => {
		const getRUserId = async () => {
			const id = await store.getItemAsync('id');
			setUserId(Number(id));
		};
		getRUserId();
	}, [setUserId]);
	const openModalHandler = () => {
		setOpenModal(true);
	};
	const { data: plan } = trpc.plans.getPlanById.useQuery({ userId, planId: Number(id) });
	return (
		<View style={s.container}>
			<Text style={s.title}>{plan?.name}</Text>
			<Image
				style={s.image}
				source={{ uri: plan?.underPhoto.link}}
				placeholder={{ blurhash }}
				resizeMode='cover'
				transition={1}
			/>
			<View style={s.verticalLineContainer} />
			<TouchableOpacity onPress={openModalHandler}>
				<Edit />
			</TouchableOpacity>
			<AIModal openModal={openModal} setOpenModal={setOpenModal} />
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F1F0ED',
		alignItems: 'center',
		paddingTop: 30,
		gap: 20,
		// justifyContent: 'center',
	},
	image: {
		height: 300,
		width: 300,
	},
	title: {
		fontSize: 25,
		fontFamily: 'RobotoSlab-Bold',
		alignSelf: 'flex-start',
		paddingHorizontal: 20,
	},
	verticalLineContainer: {
		backgroundColor: '#D9D9D9',
		height: 2,
		width: '100%',
	},
});