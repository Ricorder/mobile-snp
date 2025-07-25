import { memo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CloseEye from './CloseEye';
import type { FieldProps } from './Field.props.';
import { s } from './FieldStyles';
import OpenEye from './OpenEye';
import { Link } from 'expo-router';

const Field = ({ style, right, secureTextEntry, onChangeText, forgot, text, ...props }: FieldProps): JSX.Element => {
	const [state, setState] = useState<boolean>(true)
	const [secure, setSecure] = useState<boolean | undefined>(secureTextEntry)
	const [color, setColor] = useState('rgb(118, 118, 118)')
	const closeEyeHandler = async (): Promise<void> => {
		setState(false)
		setSecure(false)
	}
	const openEyeHandler = async (): Promise<void> => {
		setState(true)
		setSecure(true)
	}
	const onFocusHandler = async (): Promise<void> => {
		setColor('red')
	}
	const onBlurHandler = async (): Promise<void> => {
		setColor('rgb(118, 118, 118)')
	}
	return (
		<View style={s.contain}>
			<TextInput
				onChangeText={onChangeText}
				value={text}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				autoCapitalize='none'
				autoCorrect={false}
				style={{ ...s.input, ...style }}
				secureTextEntry={secure}
				{...props}
			/>
			{forgot && <Link href="/forgot" style={s.forgot}><Text>Забыли пароль?</Text></Link>}
			{state
				? secureTextEntry && <OpenEye style={right} onPress={closeEyeHandler} />
				: secureTextEntry && <CloseEye style={right} onPress={openEyeHandler} />
			}
		</View>
	)
}

export default memo(Field)
