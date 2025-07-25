import Svg, { type SvgProps, Path, Circle } from "react-native-svg"
const SellIcon = (props: SvgProps) => (
	<Svg
		width={73}
		height={69}
		fill="none"
		{...props}
	>
		<Path
			fill="#C56E52"
			d="M46.482 15.106a24.138 24.138 0 1 0 10.716 16.378l-23.822 3.892 13.106-20.27Z"
		/>
		<Path
			fill="#FDD878"
			d="M66.67 23.426a24.138 24.138 0 0 0-7.685-12.48L43.244 29.243l23.426-5.818Z"
		/>
		<Path
			fill="#FCC1CC"
			d="M57.057 9.68a8.78 8.78 0 0 0-4.921-2.052l-.76 8.748 5.68-6.695Z"
		/>
		<Path
			fill="#1BB17C"
			d="M66.89 30.826a8.78 8.78 0 0 0 .347-5.146l-8.548 2.01 8.201 3.136Z"
		/>
		<Circle cx={27} cy={25} r={3} fill="#fff" />
	</Svg>
)
export default SellIcon
