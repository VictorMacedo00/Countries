import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={`${styles.headerItems} container`}>
        <h2>Where in the world?</h2>
        <button>Dark Mode</button>
      </div>
    </nav>
  );
};

export default Header;
