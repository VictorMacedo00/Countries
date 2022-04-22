import React, { useEffect } from "react";
import styles from "./Button.module.css";
import { useFetch } from "../../hooks/useFetch";
import { GET_COUNTRIE_AT_CIOC } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const Button = ({ cioc }) => {
  const { data, request, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const { url, options } = GET_COUNTRIE_AT_CIOC(cioc);
    request(url, options);
  }, [request]);

  if (loading) return <p>Loading...</p>;
  if (data) return <button className={styles.btnCountries}>{data.name}</button>;
};

export default Button;
