import React, { useContext, useEffect } from "react";
import styles from "./Button.module.css";
import { useFetch } from "../../hooks/useFetch";
import { GET_COUNTRIE_AT_CIOC } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Button = ({ cioc }) => {
  const { data, request, loading } = useFetch();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { url, options } = GET_COUNTRIE_AT_CIOC(cioc);
    request(url, options);
  }, [request]);

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <button
        className={`${styles.btnCountries} ${
          theme ? styles.darkTheme : styles.lightTheme
        }`}
      >
        {data.name}
      </button>
    );
};

export default Button;
