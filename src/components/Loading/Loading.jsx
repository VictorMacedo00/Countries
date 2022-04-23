import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Loading.module.css";

const Loading = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.grid} ${
      theme ? styles.darkTheme : styles.lightTheme
    }`}>
      <div
        className={styles.loading}
      ></div>
    </div>
  );
};

export default Loading;
