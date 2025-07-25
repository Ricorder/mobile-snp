import { ios } from '@/constants/Constants';
import AddProject from '@/shared/AddProject/AddProject';
import GoogleSign from '@/shared/GoogleSign';
import IconRectangle from '@/shared/IconRectangle';
import ProjectsIcon from '@/shared/ProjectsIcon';
import Settings from '@/shared/Settings';
import SupportIcon from '@/shared/SupportIcon';
import { store } from '@/trpc/client';
import { router, SplashScreen, Tabs, usePathname, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function AuthLayout() {
	const route = usePathname();
	const [userName, setUserName] = useState < string > ('');
	useEffect(() => {
		const getUsername = async () => {
			const name = await store.getItemAsync('name');
			setUserName(name || '');
		};
		getUsername();
	}, [setUserName]);
	return (
		<>
			<StatusBar style="light" />
			<Tabs
				screenOptions={{
					headerStyle: { backgroundColor: '#30383A' },
					headerLeft: () => <Settings height={24} width={24} style={{ margin: 16 }} />,
					headerTitle: () => (
						<IconRectangle style={{
							position: 'absolute',
							top: ios ? 30 : 55,
							left: ios ? -60 : 110,
						}} />
					),
					headerRight: () => (
						<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 16 }}>
							<Text style={{ color: 'white', fontSize: 16, fontFamily: 'RobotoSlab-Bold' }}>{userName}</Text>
							<GoogleSign height={24} width={24} />
						</View>
					),
					tabBarActiveTintColor: 'white',
					tabBarStyle: {
						backgroundColor: '#30383A',
						height: 100,
					},
					tabBarIconStyle: {
						position: "absolute",
						top: 20,
					},
					tabBarLabelStyle: {
						position: "absolute",
						top: 50,
						// fontFamily: Fonts.bold,
						// fontSize: Height.h14,
					},
				}}
			>
				<Tabs.Screen
					name="support"
					options={{
						headerShown: true,
						tabBarLabel: "Техподдержка",
						tabBarIcon: ({ color }) => (
							<SupportIcon height={24} width={25} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="addProject"
					options={{
						headerShown: true,
						tabBarLabel: "Add Project",
						tabBarShowLabel: true,
						tabBarButton: (props) => {
							return <AddProject {...props} />;
						},
					}}
				/>
				<Tabs.Screen
					name="projects"
					options={{
						headerShown: true,
						tabBarLabel: "Мои проекты",
						tabBarShowLabel: true,
						tabBarIcon: ({ color }) => (
							<ProjectsIcon height={24} width={25} color={color} />
						),
					}}
				/>
			</Tabs>
		</>
	);
}

