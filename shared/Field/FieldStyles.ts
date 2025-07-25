import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	input: {
		borderRadius: 50,
		borderWidth: 1,
		paddingHorizontal: 15,
		paddingVertical: 10,
		fontSize: 18,
		width: '100%',
		height: 54,
		backgroundColor: 'white',
	},
	contain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	forgot: {
		position: 'absolute',
		right: 50,
		color: '#1BB17C',
		fontSize: 12,
		fontFamily: 'RobotoSlab-Regular',
	},
})
