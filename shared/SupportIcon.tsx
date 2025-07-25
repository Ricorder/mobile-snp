import Svg, { type SvgProps, Path } from "react-native-svg"
const SupportIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FDD878"
      d="M21 12.424V11a9 9 0 1 0-18 0v1.424A5 5 0 0 0 5 22h2V12H5v-1a7 7 0 1 1 14 0v1h-2v8h-4v2h6a5 5 0 0 0 2-9.576ZM5 20a3 3 0 0 1 0-6v6Zm14 0v-6a3 3 0 0 1 0 6Z"
    />
  </Svg>
)
export default SupportIcon
