import Svg, { SvgProps, Circle } from "react-native-svg"
const Ellipse = (props: SvgProps) => (
  <Svg
    width={246}
    height={246}
    fill="none"
    {...props}
  >
    <Circle cx={123} cy={123} r={123} fill="#fff" />
  </Svg>
)
export default Ellipse
