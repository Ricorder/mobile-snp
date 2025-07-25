import { StyleSheet } from "react-native";
import { grey, black } from "../../constants/Constants";

export const s = StyleSheet.create({
	button: {
		width: "70%",
		marginHorizontal: "15%",
		backgroundColor: grey,
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderRadius: 70,
		elevation: 3,
		cursor: "pointer",
		flexDirection: "row",
		gap: 20,
		height: 83,
	},
	text: {
		color: black,
		fontSize: 15,
		fontFamily: "RobotoSlab-Regular",
	},
	textBold: {
		fontFamily: "RobotoSlab-Bold",
	},
});
