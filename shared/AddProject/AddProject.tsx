import { TouchableOpacity } from 'react-native';
import type { ButtonProps } from './AddProject.props.';
import s from './AddProjectStyles';
import Plus from './Plus';

const AddProject = (props: ButtonProps): JSX.Element => {
	return (
		<TouchableOpacity {...props} style={s.container}>
			<Plus />
		</TouchableOpacity>
	)
}

export default AddProject
