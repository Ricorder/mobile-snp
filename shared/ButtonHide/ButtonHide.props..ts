import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
	title: string;
	style?: object;
	icon?: ReactNode;
}
