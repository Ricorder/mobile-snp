import Svg, { type SvgProps, Path } from "react-native-svg"
const IconRectangle = (props: SvgProps) => (
	<Svg width={100} height={32} fill="none" {...props}>
		<Path
			fill="#30383A"
			d="M1.164 12.461C-.441 6.141 4.335 0 10.856 0h78.288c6.52 0 11.297 6.14 9.692 12.461l-3.047 12A10 10 0 0 1 86.097 32H13.903a10 10 0 0 1-9.692-7.539l-3.047-12Z"
		/>
		<Path stroke="#F1F0ED" strokeWidth={2} d="M26 20h46" />
	</Svg>
);
export default IconRectangle;
