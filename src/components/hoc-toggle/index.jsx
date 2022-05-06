import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const HocToggle = (WrappedComponent) => {
    const NewToggle = () => {
        const [isToggle, setIsToggle] = useState(false);
        return (
          <div className={styles.container}>
            <WrappedComponent isToggle={isToggle} />
            <Button variant="contained" onClick={() => setIsToggle(!isToggle)}>
              Click
            </Button>
          </div>
        );
    }
  return NewToggle;
};

export default HocToggle;
