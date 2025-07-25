import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		paddingHorizontal: 10,
		gap: 10,
		backgroundColor: '#F1F0ED',
		paddingTop: 30,
	},
	list: {
		flex: 1,
		gap: 100,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontSize: 14,
		color: '#30383A',
		fontFamily: 'RobotoSlab-Regular',
	},
});

export default s;
