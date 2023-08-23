"use client"
import { animated } from '@react-spring/web'
import useAnimatedPath from "./useAnimatedPath";
import Elipse from './Elipse';


function Pointer({ color, cx, cy, d, toggle }) {
    const animationProps = useAnimatedPath({ toggle });
  return (
    <g class="pointer">
      <animated.path
        class="path outer"
        d={d}
        fill="none"
        stroke={color}
        {...animationProps}
      />
      <Elipse
        cx={cx}
        cy={cy}
        rx="27.9"
        ry="27.9"
        color={color}
        toggle={toggle}
      />
    </g>
  );
}

export default Pointer;