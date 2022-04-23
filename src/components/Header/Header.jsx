import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Header.module.css";
import { ReactComponent as LightMode } from "./../../Assets/lightMode.svg";
import { ReactComponent as DarkMode } from "./../../Assets/darkMode.svg";

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
        <button
          className={`${theme ? styles.btnDark : styles.btnLight} ${
            styles.btn
          }`}
          onClick={() => changeTheme()}
        >
          {theme ? "Light Mode" : "Dark Mode"}

          {/* {theme
            ? `${(<LightMode />)} Light Mode`
            : `${(<DarkMode />)} Dark Mode`} */}
        </button>
      </div>
    </nav>
  );
};

export default Header;
