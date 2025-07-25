import Svg, { type SvgProps, Path, Circle } from "react-native-svg"
const ByIcon = (props: SvgProps) => (
  <Svg
    width={69}
    height={69}
    fill="none"
    {...props}
  >
    <Path
      fill="#C56E52"
      d="M51.425 17.289a24.138 24.138 0 1 0 .038 34.136L34.376 34.376l17.05-17.087Z"
    />
    <Path
      fill="#FDD878"
      d="M50.817 47.383a18.167 18.167 0 0 0 .566-25.684L38.258 34.258l12.559 13.125Z"
    />
    <Circle cx={30} cy={22} r={3} fill="#fff" />
  </Svg>
)
export default ByIcon
