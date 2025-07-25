import Svg, { SvgProps, Path } from "react-native-svg"
const Scan = (props: SvgProps) => (
	<Svg
		width={47}
		height={46}
		fill="none"
		{...props}
	>
		<Path fill="#1BB17C" d="M6 0h35v46H6z" />
		<Path fill="#C56E52" d="M6 19h35v27H6z" />
		<Path fill="#FDD878" d="M0 16h47v3H0z" />
	</Svg>
)
export default Scan
