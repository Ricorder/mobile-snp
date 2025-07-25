import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Filter = (props: SvgProps) => (
	<Svg
		width={24}
		height={25}
		fill="none"
		{...props}
	>
		<G fill="#374957" clipPath="url(#a)">
			<Path d="M10.931 3.25a3.728 3.728 0 0 0-7.195 0H0v2h3.736a3.728 3.728 0 0 0 7.195 0H24v-2H10.931ZM7.333 6a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM16.667 8.75a3.745 3.745 0 0 0-3.597 2.75H0v2h13.07a3.727 3.727 0 0 0 7.194 0H24v-2h-3.736a3.745 3.745 0 0 0-3.597-2.75Zm0 5.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM7.333 17a3.745 3.745 0 0 0-3.6 2.75H0v2h3.736a3.728 3.728 0 0 0 7.195 0H24v-2H10.931A3.746 3.746 0 0 0 7.333 17Zm0 5.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z" />
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 .5h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
)
export default Filter
