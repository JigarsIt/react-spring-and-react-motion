import React from "react";
import { useSpring, animated } from "@react-spring/web";
import HocToggle from "../hoc-toggle";

const ToggleFadeText = ({ isToggle }) => {
  const fade = useSpring({
    opacity: isToggle ? 1 : 0,
    config: { duration: 3000 },
  });

  return <animated.h1 style={fade}>Hello</animated.h1>;
};

export default HocToggle(ToggleFadeText);
