import React from "react";
import FlipExample from "../../components/flip-example";
import RotateBox from "../../components/rotate-box";
import CssVariable from "../../components/css-variable";
import styles from "./styles.module.css";

const LoopExample = () => {
    return ( <div className={styles.container}><CssVariable><RotateBox /></CssVariable><FlipExample /></div> );
}
 
export default LoopExample;