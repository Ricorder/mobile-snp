// import { Colors } from "@/shared/constants";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
export default function AuthLayout() {
	return (
		<SafeAreaProvider>
			<Stack
			// screenOptions={{
			// statusBarColor: Colors.white,
			// contentStyle: {
			// 	backgroundColor: Colors.white,
			// },
			// headerShown: false,
			// headerBackImageSource: require("../../assets/images/arrow.png"),
			// headerTransparent: true,
			// headerTintColor: Colors.gray,
			// headerShadowVisible: false,
			// headerBackTitleVisible: false,
			// headerTitle: "",
			// }}
			>
				{/* <Stack.Screen name="login" options={{ headerShown: false, statusBarBackgroundColor: "#30383A", animation: "fade" }} />
				<Stack.Screen name="register" options={{ headerShown: false, statusBarBackgroundColor: "#30383A", animation: "fade" }} /> */}
				<Stack.Screen name="login" options={{ headerShown: false, animation: "fade" }} />
				<Stack.Screen name="register" options={{ headerShown: false, animation: "fade" }} />
				<Stack.Screen name="interests" options={{ headerShown: false, animation: "fade" }} />
				<Stack.Screen name="featureOne" options={{ headerShown: false, animation: "fade" }} />
				<Stack.Screen name="featureTwo" options={{ headerShown: false, animation: "fade" }} />
				<Stack.Screen name="featureThree" options={{ headerShown: false, animation: "fade" }} />
			</Stack>
		</SafeAreaProvider>
	);
}
