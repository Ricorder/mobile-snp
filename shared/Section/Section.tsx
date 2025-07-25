import { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { ButtonProps } from './Section.props.';
import { s } from './SectionStyles';

const Section = ({ titleFirst, titleSecond, titleBold, style, icon, ...props }: ButtonProps): JSX.Element => {
	return (
		<TouchableOpacity {...props} style={[s.button, style]} >
			{icon && <View>{icon}</View>}
			<Text style={s.text}>{titleFirst} <Text style={s.textBold}>{titleBold}</Text>{titleSecond && `"\n"${titleSecond}`}</Text>
		</TouchableOpacity>
	)
}

export default memo(Section)
