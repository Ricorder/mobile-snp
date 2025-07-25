import Button from "@/shared/Button/Button";
import Field from "@/shared/Field/Field";
import IconApple from "@/shared/IconApple";
import IconFacebook from "@/shared/IconFacebook";
import IconGoogle from "@/shared/IconGoogle";
import IconRectangle from "@/shared/IconRectangle";
import IconTitle from "@/shared/IconTitle";
import { trpc } from "@/trpc/client";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import s from "./style";

type Role = "BASIC" | "ADMIN";

export default function Index() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState < Role > ("BASIC");
	const register = trpc.auth.signUp.useMutation();
	const goToInterests = async () => {
		router.navigate("/interests");
		// const res = await register.mutateAsync({ name, email, password, role });
		// if (res) {
		// 	router.navigate("/interests");
		// }
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
					<Field text={name} onChangeText={setName} placeholder="Имя" />
					<Field text={email} onChangeText={setEmail} placeholder="Email" />
					<Field
						right={{ right: 40 }}
						text={password}
						onChangeText={setPassword}
						placeholder="Пароль"
						secureTextEntry
					/>
					<Button title="Зарегистрироваться" onPress={goToInterests} />
				</View>
				<View style={s.register}>
					<Text style={s.text}>
						Есть аккаунт?{" "}
						<Link href="/login" style={s.link}>
							Войдите
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
