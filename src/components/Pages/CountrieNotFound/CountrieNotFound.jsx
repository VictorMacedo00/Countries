import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./CountrieNotFound.module.css";

const CountrieNotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={ `${styles.grid} ${theme ? styles.darkTheme : styles.lightTheme}`}>
      <div className={`${styles.content} container`}>
        <h1 className="title">{"Countrie Not Found"}</h1>
        <Link  to={"/"}>
          <p onClick={() => window.location.reload()}>Back to Home Page</p>
        </Link>
      </div>
    </div>
  );
};

export default CountrieNotFound;
