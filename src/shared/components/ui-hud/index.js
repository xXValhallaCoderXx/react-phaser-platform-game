import React from "react";
import styles from "./index.module.css";

const HudContainer = ({ children }) => {
  return (
    <div className={styles.container} id="hud-container">
      <div className={styles.gameContainer}>{children}</div>
    </div>
  );
};

export default HudContainer;
