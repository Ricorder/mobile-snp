import { StyleSheet } from "react-native";

const s = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		paddingHorizontal: 10,
		backgroundColor: '#F1F0ED',
		justifyContent: 'space-between',
		paddingTop: 30,
		alignItems: 'center',
	},
	containerImage: {
		flex: 1,
		height: "100%",
		paddingHorizontal: 10,
		backgroundColor: '#F1F0ED',
		// justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	header: {
		alignSelf: 'stretch',
		marginBottom: 10,
	},
	section: {
		flex: 1,
		backgroundColor: 'white',
		height: 83,
		width: '90%',
	},
	button: {
		gap: 20,
		height: 200,
		marginTop: 10,
		// marginHorizontal: '90%',
		// paddingHorizontal: '-50%',
		width: '90%',
	},
	image: {
		width: 300,
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 30,
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontFamily: 'RobotoSlab-Bold',
		marginTop: 30,
	},
	emptyContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	emptyText: {
		fontSize: 14,
		color: '#30383A',
		fontFamily: 'RobotoSlab-Regular',
	},
	headerContainer: {
		width: '100%',
	},
});

export default s;
