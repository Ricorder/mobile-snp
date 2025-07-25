import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	container: {
		justifyContent: "center",
		paddingHorizontal: 10,
		marginVertical: 8,
		gap: 10,
	},
	statusContainer: {
		paddingHorizontal: 10,
		borderTopEndRadius: 10,
		borderTopStartRadius: 10,
		fontFamily: 'RobotoSlab-Regular',
	},
	wrapper: {
		borderTopEndRadius: 10,
		borderTopStartRadius: 10,
	},
	image: {
		width: 100,
		height: 100,
	},
	imageContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	title: {
		fontFamily: 'RobotoSlab-Bold',
		fontSize: 16,
	},
	description: {
		fontFamily: 'RobotoSlab-Regular',
		fontSize: 12,
	},
	verticalLine: {
		width: '100%',
		height: 100,
		backgroundColor: 'red',
	},
	verticalLineContainer: {
		backgroundColor: '#D9D9D9',
		height: 2,
	},
});
