// mport { green } from '@/constants/Constants';
import { green } from "@/constants/Constants";
import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		// backgroundColor: Colors.white,
	},
	top: {
		justifyContent: "flex-end",
		alignItems: "center",
		height: "23%",
		backgroundColor: "#F1F0ED",
		gap: 10,
	},
	bottom: {
		alignItems: "center",
		justifyContent: "center",
		height: "77%",
		backgroundColor: "#F1F0ED",
		gap: 10,
		paddingHorizontal: 100,
	},
	title: {
		position: "absolute",
		bottom: -33,
		zIndex: 1,
	},
	titleText: {
		color: "#30383A",
		fontSize: 20,
		fontFamily: "RobotoSlab-Bold",
	},
	featureText: {
		color: "#30383A",
		fontSize: 20,
		fontFamily: "RobotoSlab-Regular",
	},
	text: {
		color: "#30383A",
		fontSize: 14,
		fontFamily: "RobotoSlab-Regular",
	},
	button: {
		marginHorizontal: "25%",
	},
	register: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	link: {
		color: green,
		fontSize: 15,
	},
	textBottom: {
		fontSize: 15,
		marginTop: 20,
	},
	// middle: {
	// 	justifyContent: "center",
	// 	height: ios ? height / 2 - height / 14 : height / 2 - height / 35,
	// 	gap: Height.h16,
	// 	paddingHorizontal: Width.w16,
	// },
	// googleApple: {
	// 	flexDirection: "row",
	// 	height: height / 2 / 3,
	// },
	// center: {
	// 	width: width / 2,
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// },
});

export default s;
