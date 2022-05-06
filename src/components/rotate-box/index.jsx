import React from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./styles.module.css";
const RotateBox = () => {
  const rotate = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    duration: 3000,
  });
  return (
    <div className={styles.container}>
      <animated.div
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#d6d6d6",
          borderRadius: 16,
          boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#133867",
          ...rotate,
        }}
      >
        IPS
      </animated.div>
    </div>
  );
};

export default RotateBox;
