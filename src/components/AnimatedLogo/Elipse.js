"use client"
import { animated } from '@react-spring/web'
import useAnimatedPath from "./useAnimatedPath";

function Elipse({ color, rx = "27.9", ry = "27.9", cx = "230", cy="230", toggle }) {
    const animationProps = useAnimatedPath({ toggle });
  return (
    <g>
      <animated.ellipse
        class="path circle"
        color={color}
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke={color}
        {...animationProps}
      />
    </g>
  );
}

export default Elipse