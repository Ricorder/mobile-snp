import Button from "@/shared/Button/Button";
import Field from "@/shared/Field/Field";
import IconApple from "@/shared/IconApple";
import IconFacebook from "@/shared/IconFacebook";
import IconGoogle from "@/shared/IconGoogle";
import IconRectangle from "@/shared/IconRectangle";
import IconTitle from "@/shared/IconTitle";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import s from "./style";
import { trpc, store } from '@/trpc/client';

export default function Index() {
	const [email, setEmail] = useState('cheku@mail.ru');
	const [password, setPassword] = useState('123');

	// const trpc = useTRPC(); // use `import { trpc } from './utils/trpc'` if you're using the singleton pattern
	// const login = useQuery(trpc.auth.signIn.queryOptions({ email, password }));
	// const userCreator = useMutation(trpc.createUser.mutationOptions());
	const login = trpc.auth.signIn.useMutation();
	const goToInterests = async () => {
		const res = await login.mutateAsync({ email, password });
		if (res) {
			store.setItemAsync('role', res.user.role);
			store.setItemAsync('id', res.user.id.toString());
			store.setItemAsync('name', res.user.name);
			router.navigate("/interests");
		}
	};
	return (
		<View style={s.container}>
			<View style={s.top}>
				<IconTitle
					style={s.title}
					colorLeft="#F1F0ED"
					colorCenter="#1BB17C"
					colorRight="#C56E52"
				/>
				<Text style={s.titleText}>Помощник в выборе квартиры</Text>
				<View style={s.titleContainer}>
					<Field text={email} onChangeText={setEmail} placeholder="Email" />
					<Field right={{ right: 40 }} text={password} onChangeText={setPassword} placeholder="Пароль" secureTextEntry forgot />
					<Button
						title="Авторизоваться"
						onPress={goToInterests}
						style={s.button}
					/>
				</View>
				<View style={s.register}>
					<Text style={s.text}>
						Нет аккаунта?{" "}
						<Link href="/register" style={s.link}>
							Зарегистрируйтесь
						</Link>
					</Text>
				</View>
				<IconRectangle style={s.icon} />
			</View>
			<View style={s.bottom}>
				<Text style={s.textBottom}>Или войдите через</Text>
				<Button
					style={s.google}
					title="Continue with Google"
					icon={<IconGoogle />}
				/>
				<Button
					style={s.facebook}
					title="Continue with Facebook"
					icon={<IconFacebook />}
				/>
				<Button
					style={s.apple}
					title="Continue with Apple"
					icon={<IconApple />}
				/>
			</View>
		</View>
	);
}
