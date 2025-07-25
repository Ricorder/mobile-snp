import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { blurhash, type PlanProps } from './Plan.props.';
import { s } from './PlanStyles';
import { useRouter } from 'expo-router';

const Plan = ({ status, image, name, description, id }: PlanProps): JSX.Element => {
	const router = useRouter();
	let statusText = '';
	let backgroundColor = '';
	let color = '';
	switch (status) {
		case 'CHECKED':
			statusText = 'Принято'
			backgroundColor = '#1BB17C'
			color = '#FFFFFF'
			break;
		case 'REJECT':
			statusText = 'Отклонено'
			backgroundColor = '#BCBCBC'
			color = '#FFFFFF'
			break;
		case 'UNDER_REVIEW':
			statusText = 'На проверке'
			backgroundColor = '#FDD878'
			color = '#FFFFFF'
			break;
		case 'IN_WORK':
			statusText = 'В работе'
			backgroundColor = '#1877F2'
			color = '#FFFFFF'
			break;
		default:
			break;
	}
	const handlePress = () => {
		router.push(`/projects/${id}`);
	}
	return (
		<TouchableOpacity style={s.container} onPress={handlePress}>
			<Text style={s.wrapper}>
				<View style={[s.statusContainer, { backgroundColor }]}>
					<Text style={{ color }}>{statusText}</Text>
				</View>
			</Text>
			<View style={s.imageContainer}>
				<Image
					style={s.image}
					source={image}
					placeholder={{ blurhash }}
					contentFit='contain'
					transition={100}
				/>
				<View>
					<Text style={s.title}>{name}</Text>
					<Text style={s.description}>{description}</Text>
				</View>
			</View>
			<View style={s.verticalLineContainer}/>
		</TouchableOpacity>
	)
}

export default Plan
