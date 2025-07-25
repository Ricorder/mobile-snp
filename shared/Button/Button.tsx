import { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { ButtonProps } from './Button.props.';
import { s } from './ButtonStyles';

const ButtonHide = forwardRef < TouchableOpacity, ButtonProps>(( props, ref): JSX.Element => {
	return (
		<TouchableOpacity {...props} style={[s.button, props.style]} ref={ref}>
			{props.icon && <View>{props.icon}</View>}
			<Text style={{...s.text, ...props.style}}>{props.title}</Text>
		</TouchableOpacity>
	)
})

export default ButtonHide
