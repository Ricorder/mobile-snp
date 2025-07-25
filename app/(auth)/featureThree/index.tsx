import { Text, View } from "react-native";
import s from "./style";
import { Link } from "expo-router";
import IconTitle from "@/shared/IconTitle";
import Ellipse from "@/shared/Ellipse";
import CarouselThree from "@/shared/CarouselThree";
import Button from "@/shared/Button/Button";

export default function Index() {
	return (
		<View style={s.container}>
			<View style={s.top}>
				<IconTitle
					style={s.title}
					colorLeft="#30383A"
					colorCenter="#1BB17C"
					colorRight="#C56E52"
				/>
			</View>
			<View style={s.bottom}>
				<Text style={s.titleText}>Фишка 3</Text>
				<Ellipse style={s.ellipse} />
				<Text style={s.featureText}>Лорем ипсум</Text>
				<Link href="/projects" asChild style={s.button}>
					<Button title="Начинаем" />
				</Link>
				{/* <Link href="/projects">
					<Text style={s.text}>Пропустить</Text>
				</Link> */}
				<CarouselThree />
			</View>
		</View>
	);
}
