import Svg, { SvgProps, Rect } from "react-native-svg"
const CarouselThree = (props: SvgProps) => (
	<Svg width={62} height={8} fill="none" {...props}>
		<Rect width={10} height={8} fill="#fff" rx={4} />
		<Rect width={10} height={8} x={16} fill="#fff" rx={4} />
		<Rect width={30} height={8} x={32} fill="#1BB17C" rx={4} />
	</Svg>
);
export default CarouselThree;
