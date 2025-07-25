import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: 'flex-end',
		width: '100%',
		height: '100%',
		gap: 10,
	},
	modalContent: {
		width: '100%',
		height: '60%',
		backgroundColor: '#30383A',
		padding: 50,
		gap: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5, // для Android
		// justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	},
	button: {
		width: '80%',
		height: '15%',
		backgroundColor: '#F1F0ED',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 15,
		// color: 'white',
		fontFamily: 'RobotoSlab-Regular',
		textAlign: 'center',
	},
	cross: {
		position: 'absolute',
		top: 30,
		right: 30,
	},
});
