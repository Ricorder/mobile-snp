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
		backgroundColor: "#F1F0ED",
		color: "#30383A",
	},
});

export default s;
