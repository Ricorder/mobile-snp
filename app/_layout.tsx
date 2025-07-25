import { TRPCProvider } from '@/trpc/Provider';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox } from 'react-native';
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {

	
	LogBox.ignoreAllLogs();
	// const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		'RobotoSlab-Regular': require('../assets/fonts/RobotoSlab-Regular.ttf'),
		'RobotoSlab-SemiBold': require('../assets/fonts/RobotoSlab-SemiBold.ttf'),
		'RobotoSlab-Bold': require('../assets/fonts/RobotoSlab-Bold.ttf'),
	});
	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<TRPCProvider>
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
					<Stack.Screen name="(auth)" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</TRPCProvider>
		</SafeAreaProvider>
	);
}