import React from "react";
import { useSpring, animated } from "@react-spring/web";
import HocToggle from "../hoc-toggle";

const ToggleFontColorText = ({ isToggle }) => {
    const fade = useSpring({
        fontSize: isToggle ? "4rem":"1.5rem",
        color: isToggle ? "tomato":"green",
        config: { duration: 1500 },
    });
  return <animated.h1 style={fade}>Hello, IPS</animated.h1>;
};

export default HocToggle(ToggleFontColorText);
