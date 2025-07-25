import * as React from "react";
import Svg, { type SvgProps, Path } from "react-native-svg"

const IconFacebook = (props: SvgProps) => (
	<Svg width={25} height={24} fill="none" {...props}>
		<Path fill="#1877F2" d="M.5 0h24v24H.5z" />
		<Path
			fill="#fff"
			d="M24 12.07C24 5.719 18.851.57 12.5.57S1 5.719 1 12.07c0 5.74 4.205 10.497 9.703 11.36v-8.036h-2.92V12.07h2.92V9.536c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036C19.795 22.567 24 17.81 24 12.07Z"
		/>
	</Svg>
);
export default IconFacebook;
