import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={ `${styles.grid} ${theme ? styles.darkTheme : styles.lightTheme}`}>
      <div className={`${styles.content} container`}>
        <h1 className="title">{"<Error 404 />"}</h1>
        <p>Page Not Found</p>
        <Link  to={"/"}>
          <p>Back to Home Page</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
