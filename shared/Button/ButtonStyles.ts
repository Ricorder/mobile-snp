import { StyleSheet } from "react-native";
import { green, white } from "../../constants/Constants";

export const s = StyleSheet.create({
	button: {
		// width: "70%",
		// marginHorizontal: "15%",
		backgroundColor: green,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		borderRadius: 50,
		elevation: 3,
		// cursor: "pointer",
		flexDirection: "row",
		gap: 10,
		width: '100%',
	},
	text: {
		color: white,
		fontSize: 16,
		fontFamily: "RobotoSlab-Regular",
	},
});
