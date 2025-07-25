import { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { ButtonHideProps } from './ButtonHide.props.';
import { s } from './ButtonHideStyles';

const Button = forwardRef < TouchableOpacity, ButtonHideProps>(( props, ref): JSX.Element => {
	return (
		<TouchableOpacity {...props} style={[s.button, props.style]} ref={ref}>
			{props.icon && <View>{props.icon}</View>}
			<Text style={{...s.text, ...props.style}}>{props.title}</Text>
		</TouchableOpacity>
	)
})

export default Button
