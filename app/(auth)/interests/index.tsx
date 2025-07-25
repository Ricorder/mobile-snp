import { Text, View } from "react-native";
import s from "./style";
import { Link } from "expo-router";
import IconTitle from "@/shared/IconTitle";
import Section from "@/shared/Section/Section";
import DesignIcon from "@/shared/DesignIcon";
import SellIcon from "@/shared/SellIcon";
import ByIcon from "@/shared/ByIcon";

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
				<Text style={s.titleText}>Какая у вас область интересов</Text>
				<Section
					titleFirst="Я"
					titleBold="покупаю"
					titleSecond="недвижимость"
					icon={<ByIcon />}
				/>
				<Section
					titleFirst="Я"
					titleBold="продаю"
					titleSecond="недвижимость"
					icon={<SellIcon />}
				/>
				<Section titleFirst="Я" titleBold="дизайнер" icon={<DesignIcon />} />
				<Link href="/featureOne">
					<Text style={s.text}>Пропустить</Text>
				</Link>
			</View>
		</View>
	);
}
