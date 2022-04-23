import React, { useContext } from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Card = ({ flag, name, population, region, capital }) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      key={name}
      onClick={() => navigate(`/countrie/${name}`)}
      className={`${styles.card} ${
        theme ? styles.darkTheme : styles.lightTheme
      }`}
    >
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
