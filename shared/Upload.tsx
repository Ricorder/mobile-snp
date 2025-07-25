import Svg, { SvgProps, Path } from "react-native-svg"
const Upload = (props: SvgProps) => (
	<Svg
		width={58}
		height={51}
		fill="none"
		{...props}
	>
		<Path fill="#C56E52" d="M.894 8.619 27.67 0l8.619 26.776-26.776 8.619z" />
		<Path
			fill="#FCC1CC"
			d="m30.702 4.688 26.988 7.93-7.93 26.989-26.989-7.931z"
		/>
		<Path
			fill="#1BB17C"
			d="m14.957 22.011 28.02-2.477 2.477 28.02-28.02 2.477z"
		/>
	</Svg>
)
export default Upload
