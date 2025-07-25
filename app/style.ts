import { green } from '@/constants/Constants';
import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		// backgroundColor: Colors.white,
	},
	top: {
		justifyContent: "center",
		alignItems: "center",
		height: "62%",
		backgroundColor: "#30383A",
		gap: 10
	},
	bottom: {
		alignItems: "center",
		justifyContent: "center",
		height: "38%",
		backgroundColor: "#F1F0ED",
		gap: 10
	},
	icon: {
		position: "absolute",
		bottom: -15,
		zIndex: 1,
	},
	title: {
	},
	titleText: {
		color: "#fff",
		fontSize: 15,
	},
	register: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	text: {
		color: "#fff",
		fontSize: 15,
	},
	link: {
		color: green,
		fontSize: 15,
	},
	textBottom: {
		fontSize: 15,
		marginTop: 20,
	},
	google: {
		backgroundColor: "white",
		color: 'black',
	},
	facebook: {
		backgroundColor: "#1877F2",
	},
	apple: {
		backgroundColor: "black",
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

export default s
