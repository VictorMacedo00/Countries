import React from "react";
import styles from "./Card.module.css";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        <img src={flag} alt={name} />
      </div>
      <div className={styles.infos}>
        <h3>{name}</h3>
        <p>
          <strong>Population: </strong> {population}
        </p>
        <p>
          <strong>Region :</strong> {region}
        </p>
        <p>
          <strong>Capital: </strong> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
