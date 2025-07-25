import type { TextInputProps } from 'react-native';

export interface FieldProps extends TextInputProps {
	right?: {
		right: number;
	};
	forgot?: boolean;
	style?: object;
	onChangeText?: (text: string) => void;
	text?: string;
}
