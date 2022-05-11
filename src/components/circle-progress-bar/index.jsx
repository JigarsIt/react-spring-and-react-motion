import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { easeBounceOut } from "d3-ease";
import styles from "./styles.module.css";

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const svgConfig = { easing: easeBounceOut, duration: 2500 };

const Wheel = ({ stroke, otherStroke }) => (
  <div>
    <svg viewBox="0 0 36 36" className={styles.wheel} width="100">
      <path className={styles.circle_bg} d={circlePath} />
      <animated.path
        className={styles.circle}
        strokeDasharray={otherStroke}
        d={circlePath}
      />
      <animated.text x="18" y="20.35" className={styles.percentage}>
        {stroke}
      </animated.text>
    </svg>
  </div>
);

const CircleProgressBar = () => {
  const [active, set] = useState(false);

  const props3 = useSpring({
    stroke: active ? 100 : 0,
    otherStroke: active ? "100, 100" : "0,100",
    config: svgConfig,
  });
  return (
    <div className={styles.container} onClick={() => set(!active)}>
      <Wheel
        stroke={props3.stroke.to((x) => Math.round(x))}
        otherStroke={props3.otherStroke}
      />
    </div>
  );
};

export default CircleProgressBar;
