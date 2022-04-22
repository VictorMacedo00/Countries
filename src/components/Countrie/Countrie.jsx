import React, { useEffect } from "react";
import styles from "./Countrie.module.css";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { GET_COUNTRIE } from "../../api/api";
import Button from "../Button/Button";

const Countrie = () => {
  const { name } = useParams();

  const { data, request, loading } = useFetch();

  useEffect(() => {
    const { url, options } = GET_COUNTRIE(name);
    request(url, options);
  }, [request]);

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <div className={styles.countrie}>
        <div className="container">
          <div className={styles.infos}>
            <div className={styles.btn}>
              <Link to={"/"}>
                <button className={styles.btnBack}>← Back</button>
              </Link>
            </div>
            <div className={styles.flag}>
              <img src={data[0].flags.svg} alt="" />
            </div>
            <div className={styles.countrieInfos}>
              <h1>{data[0].name}</h1>
              <div className={styles.groupInfos01}>
                <p>
                  <strong>Native Name: </strong>
                  {data[0].nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {data[0].population.toLocaleString('pt-BR')}
                </p>
                <p>
                  <strong>Region: </strong>
                  {data[0].region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {data[0].subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {data[0].capital}
                </p>
              </div>
              <div className={styles.groupInfos02}>
                <p>
                  <strong>Top Level Domain: </strong>
                  {data[0].topLevelDomain}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {data[0].currencies.map((currencie) => currencie.name)}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {data[0].languages.map((language) => `${language.name} `)}
                </p>
              </div>
              <div className={styles.borderCountries}>
                <p>
                  <strong>Border Countries: </strong>
                </p>
                {data[0].borders &&
                  data[0].borders.map((border) => <Button cioc={border} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Countrie;
