import Svg, { SvgProps, Rect } from "react-native-svg"
const Plus = (props: SvgProps) => (
	<Svg
		width={42}
		height={42}
		fill="none"
		{...props}
	>
		<Rect width={4} height={33} x={19} y={4} fill="#fff" rx={2} />
		<Rect
			width={4}
			height={32}
			x={5}
			y={23}
			fill="#fff"
			rx={2}
			transform="rotate(-90 5 23)"
		/>
	</Svg>
)
export default Plus