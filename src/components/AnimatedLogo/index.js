"use client";
import { useState, useEffect } from "react";

import Circle from "./Circle";
import Ring from "./Ring";
import Elipse from "./Elipse";
import Pointer from "./Pointer";

function Logo({ color = "white" }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 0);
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 460"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "24vmin",
          height: "24vmin",
        }}
      >
        <Circle />
        <Ring
          d={[
            "M421.5,204.5c-5.4-40.7-23.7-80.1-54.9-111.4c-31.3-31.4-70.7-49.7-111.4-55",
            "M255.2,421.9c40.7-5.3,80.1-23.7,111.4-55c31.2-31.3,49.5-70.6,54.9-111.4",
            "M38.5,255.7c5.4,40.6,23.7,79.9,54.9,111.1c31.3,31.4,70.7,49.7,111.4,55",
            "M204.8,38.1c-40.7,5.3-80.1,23.7-111.4,55c-31.3,31.4-49.6,70.8-55,111.6",
          ]}
          color={color}
          toggle={toggle}
        />
        <Elipse rx="157.7" ry="157.7" color={color} toggle={toggle} />
        <Ring
          d={[
            "M283.4,317.7c14-8.5,25.8-20.2,34.4-34.1",
            "M141.8,283.9c8.6,14,20.5,25.8,34.7,34.3",
            "M176.6,142.3c-14.1,8.6-25.9,20.3-34.5,34.3",
            "M318.4,176.3c-8.6-14.1-20.6-26-34.8-34.5",
          ]}
          color={color}
          toggle={toggle}
        />
        <Elipse rx="27.9" ry="27.9" color={color} toggle={toggle} />
        <Pointer
          d="M10,230.2c0,0,45.5,55.5,117.5,55.5c30.6,0,55.5-24.9,55.5-55.5s-24.8-55.5-55.5-55.5C55.5,174.7,10,230.2,10,230.2"
          cx="127.5"
          cy="230"
          color={color}
          toggle={toggle}
        />
        <Pointer
          d="M230,450c0,0,55.5-45.5,55.5-117.3c0-30.7-24.8-55.5-55.5-55.5s-55.5,24.9-55.5,55.5C174.5,404.5,230,450,230,450"
          cx="230.2"
          cy="332.9"
          color={color}
          toggle={toggle}
        />
        <Pointer
          d="M450,230c0,0-45.5-55.5-117.5-55.5c-30.6,0-55.5,24.9-55.5,55.5s24.8,55.5,55.5,55.5C404.5,285.5,450,230,450,230"
          cx="332.8"
          cy="230.2"
          color={color}
          toggle={toggle}
        />
        <Pointer
          d="M230,10c0,0-55.5,45.5-55.5,117.3c0,30.7,24.8,55.5,55.5,55.5s55.5-24.9,55.5-55.5C285.5,55.5,230,10,230,10"
          cx="230"
          cy="127.3"
          color={color}
          toggle={toggle}
        />
      </svg>
    </div>
  );
}

export default Logo;
