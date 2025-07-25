// mport { green } from '@/constants/Constants';
import { green } from '@/constants/Constants';
import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		// backgroundColor: Colors.white,
	},
	top: {
		justifyContent: 'flex-end',
		alignItems: "center",
		height: "23%",
		backgroundColor: "#F1F0ED",
		gap: 10
	},
	bottom: {
		alignItems: "center",
		justifyContent: "center",
		height: "77%",
		backgroundColor: "#30383A",
		gap: 10
	},
	title: {
		position: "absolute",
		bottom: -33,
		zIndex: 1,
	},
	titleText: {
		color: "#F1F0ED",
		fontSize: 20,
	},
	text: {
		color: "#F1F0ED",
		fontSize: 14,
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