// import { Text, View } from "react-native";
// import s from "./style";
// export default function Index() {
// 	return (
// 		<View style={s.container}>
// 			<Text>Support</Text>
// 		</View>
// 	);
// }
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';

const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Plan() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: 'https://ams1.vultrobjects.com/photos-plans/underPhoto/12378a53-37ae-4517-92de-3b1a6a299928.jpg' }}
				// placeholder={{ blurhash }}
				resizeMode='cover'
				// contentFit='cover'
				// transition={1}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		// flex: 1,
		height: 100,
		width: 100,
		backgroundColor: '#0553',
	},
});