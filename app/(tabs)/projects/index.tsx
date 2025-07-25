import Header from '@/features/Header/Header';
import Plan from '@/features/Plan/Plan';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import s from "./style";
import { trpc, store } from '@/trpc/client';

export enum UserRole {
	BASIC = 'BASIC',
	ADMIN = 'ADMIN',
}
export default function Index() {
	const [userId, setUserId] = useState<number | null>(null);
	const [userRole, setUserRole] = useState<string | null>(null);
	// const trpc = useTRPC();
	// const allPlans = useQuery(trpc.plans.getAllPlans.queryOptions());
	useEffect(() => {
		const getRole = async () => {
			const id = await store.getItemAsync('id');
			const role = await store.getItemAsync('role');
			setUserId(Number(id));
			setUserRole(role);
		};
		getRole();
	}, [setUserId, setUserRole]);
	const allPlans = trpc.plans.getAllPlans.useQuery();
	const plansByUser = trpc.plans.getAllPlansByUser.useQuery({ id: Number(userId) });
	const plans = userRole === UserRole.ADMIN ? allPlans : plansByUser
	const onRefresh = async () => {
		if (userRole === UserRole.ADMIN) {
			await allPlans.refetch(); // Запуск повторного запроса
		} else {
			await plansByUser.refetch();
		}
	};
	if (allPlans.isLoading) {
		return <ActivityIndicator size="large" color="#0000ff" />
	}
	if (allPlans.error) {
		return <Text>{allPlans.error.message}</Text>
	}
	const handleScroll = (event) => {
		const offsetY = event.nativeEvent.contentOffset.y;

		// Если пользователь проскролбил чуть-чуть вверх от начала — запускаем refresh
		if (offsetY < -10) {
			onRefresh();
		}
	};
	return (
		<View style={s.container}>
			<Header />
			<FlatList
				data={plans.data}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<Plan
						id={item.id.toString()}
						status={item.status}
						image={item.underPhoto.link}
						name={item.name}
						description={item.description}
					/>
				)}
				refreshControl={
					<RefreshControl
						refreshing={allPlans.isRefetching || allPlans.isLoading} // Показываем индикатор
						onRefresh={onRefresh}
					/>
				}
				onScroll={handleScroll}
				scrollEventThrottle={16} // частота обновления события скролла (мс)
				ListEmptyComponent={() => (
					<View style={s.emptyContainer}>
						<Text style={s.emptyText}>У вас пока нет загруженных проектов</Text>
					</View>
				)}
			/>
		</View>
	);
}