import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./styles.module.css";
const FlipExample = () => {
    const [flip, set] = useState(false);

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: ()=>set(!flip),
    });
    return ( <div className={styles.container}><animated.h1 style={props}>Hello, IPS</animated.h1></div> );
}
 
export default FlipExample;