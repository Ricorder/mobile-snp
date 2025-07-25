import { StyleSheet } from "react-native";
import { green, white } from "../../constants/Constants";

export const s = StyleSheet.create({
	button: {
		backgroundColor: green,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		flexDirection: "row",
		gap: 10,
		width: '100%',
		borderRadius: 0,
		borderWidth: 0,
		elevation: 0,
		shadowOffset: { width: 0, height: 0 },
		overflow: 'hidden',
	},
	text: {
		color: white,
		fontSize: 16,
		fontFamily: "RobotoSlab-Regular",
	},
});
