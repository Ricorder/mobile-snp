import { Platform } from 'react-native';

export const white = 'white';
export const grey = '#F1F0ED';
export const black = 'black';
export const green = '#1BB17C';
export const mobile: boolean = Platform.OS === 'android' || Platform.OS === 'ios';
export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';