import React from "react";
import CircleProgressBar from "../circle-progress-bar";
import HorizontalProgressBar from "../horizontal-progress-bar";
import styles from "./styles.module.css";
const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <HorizontalProgressBar />
      <CircleProgressBar />
    </div>
  );
};

export default ProgressBar;
