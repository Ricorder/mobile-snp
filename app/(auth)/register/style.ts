// mport { green } from '@/constants/Constants';
import { green } from "@/constants/Constants";
import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
	},
	top: {
		justifyContent: "center",
		alignItems: "center",
		height: "62%",
		backgroundColor: "#30383A",
		gap: 10,
	},
	bottom: {
		alignItems: "center",
		justifyContent: "center",
		height: "38%",
		backgroundColor: "#F1F0ED",
		gap: 10,
	},
	titleContainer: {
		paddingHorizontal: '10%',
		gap: 10,
		width: "90%",
	},
	icon: {
		position: "absolute",
		bottom: -15,
		zIndex: 1,
	},
	titleText: {
		color: "#fff",
		fontSize: 15,
		fontFamily: "RobotoSlab-Regular",
	},
	register: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	text: {
		color: "#fff",
		fontSize: 15,
		fontFamily: "RobotoSlab-Regular",
	},
	link: {
		color: green,
		fontSize: 15,
		fontFamily: "RobotoSlab-Regular",
	},
	textBottom: {
		fontSize: 15,
		marginTop: 20,
		fontFamily: "RobotoSlab-Regular",
	},
	google: {
		backgroundColor: "white",
		color: "black",
		width: "70%",
	},
	facebook: {
		backgroundColor: "#1877F2",
		width: "70%",
	},
	apple: {
		backgroundColor: "black",
		width: "70%",
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
