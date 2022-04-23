import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Header.module.css";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`${styles.header} ${
        theme ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <div className={`${styles.headerItems} container`}>
        <h2>Where in the world?</h2>
        <button onClick={() => changeTheme()}>
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
