import ButtonHide from "@/shared/ButtonHide/Button";
import CarouselOne from "@/shared/CarouselOne";
import Ellipse from "@/shared/Ellipse";
import IconTitle from "@/shared/IconTitle";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import s from "./style";

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
				<Text style={s.titleText}>Фишка 1</Text>
				<Ellipse style={s.ellipse} />
				<Text style={s.featureText}>Лорем ипсум</Text>
				<Link href="/featureTwo" asChild>
					<ButtonHide title="Пропустить" style={s.button} />
				</Link>
				<CarouselOne />
			</View>
		</View>
	);
}
