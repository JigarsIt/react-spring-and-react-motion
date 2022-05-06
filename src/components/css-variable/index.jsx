import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "./styles.module.css";
const CssVariable = ({children}) => {
  const [{ background }] = useSpring(
    () => ({
      from: {
        background: "var(--from, #023059)",
      },
      to: {
        background: "var(--to, #BF9765)",
      },
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <animated.div className={styles.block} style={{ background }}>
        {children}
      </animated.div>
    </div>
  );
};

export default CssVariable;
