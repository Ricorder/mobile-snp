import Svg, { SvgProps, Path } from "react-native-svg"
const Cross = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={11}
		height={11}
		fill="none"
		{...props}
	>
		<Path
			fill="#fff"
			d="M.586 11v-.923l.923-.161 3.303-4.329-3.062-4.16-.93-.16V.335h3.457v.93l-1.003.095L5.632 4.65 7.874 1.36l-1.026-.095v-.93h3.48v.93l-.975.161-2.893 4.16 3.208 4.329.945.161V11H7.112v-.923l1.033-.095-2.527-3.464-2.52 3.464.974.095V11H.586Z"
		/>
	</Svg>
)
export default Cross
