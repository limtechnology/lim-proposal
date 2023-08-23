import { useState } from "react";
import { useSpring } from "react-spring";

function useAnimatedPath({ toggle }) {
    const [length, setLength] = useState(null);
    const animatedStyle = useSpring({
      strokeDashoffset: toggle ? 0 : length,
      strokeDasharray: length,
      strokeWidth: '6px',
      config: {
        mass: 5,
        friction: 120,
        tension: 120,
      },
    });
  
    return {
      style: animatedStyle,
      ref: (ref) => {
        // The ref is `null` on component unmount
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }
    };
  }
  
  
export default useAnimatedPath;