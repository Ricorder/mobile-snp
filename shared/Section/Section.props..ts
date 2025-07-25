import type { ReactNode } from "react";
import type { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
	titleFirst: string;
	titleBold?: string;
	titleSecond?: string;
	style?: object;
	icon?: ReactNode;
}
