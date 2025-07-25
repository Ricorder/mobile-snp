import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import s from "./Header.style";
import Filter from '@/shared/Filter';

export default function Header({ style }: { style?: StyleProp<ViewStyle> }) {
	return (
		<TouchableOpacity style={[s.header, style]}>
			<Text style={s.title}>Мои проекты</Text>
			<Filter />
		</TouchableOpacity>
	);
}