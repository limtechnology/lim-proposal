"use client"
import { animated } from '@react-spring/web'
import useAnimatedPath from "./useAnimatedPath";

function Ring({ color, d, toggle }) {

  const animationProps = useAnimatedPath({ toggle });
    

  const paths = d.map((item, index) => {
    return (
      <animated.path
        key={index}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        style={{ strokeWidth: '6px'}}
        d={item}
        {...animationProps}
      />
    );
  });

  return <g>{paths}</g>;
}

export default Ring;