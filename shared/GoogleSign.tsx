import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const GoogleSign = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={24}
		fill="none"
		{...props}
	>
		<Rect width={23} height={23} y={0.5} fill="#fff" rx={11.5} />
		<Path
			fill="#4285F4"
			fillRule="evenodd"
			d="M16.78 12.125c0-.39-.035-.765-.1-1.125H11.5v2.127h2.96a2.53 2.53 0 0 1-1.098 1.66v1.38h1.778c1.04-.957 1.64-2.367 1.64-4.042Z"
			clipRule="evenodd"
		/>
		<Path
			fill="#34A853"
			fillRule="evenodd"
			d="M11.5 17.5c1.485 0 2.73-.493 3.64-1.333l-1.777-1.38c-.493.33-1.123.525-1.863.525-1.432 0-2.645-.967-3.078-2.267H6.585v1.425A5.498 5.498 0 0 0 11.5 17.5Z"
			clipRule="evenodd"
		/>
		<Path
			fill="#FBBC05"
			fillRule="evenodd"
			d="M8.422 13.045A3.306 3.306 0 0 1 8.25 12c0-.363.063-.715.172-1.045V9.53H6.585a5.498 5.498 0 0 0 0 4.94l1.837-1.425Z"
			clipRule="evenodd"
		/>
		<Path
			fill="#EA4335"
			fillRule="evenodd"
			d="M11.5 8.688c.807 0 1.533.277 2.102.822l1.578-1.577C14.227 7.045 12.983 6.5 11.5 6.5a5.498 5.498 0 0 0-4.915 3.03l1.837 1.425c.433-1.3 1.646-2.268 3.078-2.268Z"
			clipRule="evenodd"
		/>
	</Svg>
)
export default GoogleSign
