import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#30383AB2', // затемнение фона
		gap: 10,
	},
	modalContent: {
		width: '90%',
		height: '40%',
		backgroundColor: '#30383AB2',
		borderRadius: 50,
		padding: 50,
		gap: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5, // для Android
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	},
	modalTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
		fontFamily: 'RobotoSlab-Bold',
	},
	modalDescription: {
		fontSize: 12,
		color: 'white',
		fontFamily: 'RobotoSlab-Regular',
		textAlign: 'center',
	},
});
