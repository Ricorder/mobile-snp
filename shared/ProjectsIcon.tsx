import Svg, { type SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ProjectsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#FDD878"
        d="M13.838.833a2 2 0 0 0-2.676 0L.5 10.43v10.4a3.2 3.2 0 0 0 3.2 3.2h17.6a3.2 3.2 0 0 0 3.2-3.2v-10.4L13.838.833ZM15.5 22.026h-6V17a3 3 0 0 1 6 0v5.026Zm7-1.2a1.2 1.2 0 0 1-1.2 1.2h-3.8V17a5 5 0 0 0-10 0v5.026H3.7a1.2 1.2 0 0 1-1.2-1.2V11.32l10-9 10 9v9.507Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ProjectsIcon
