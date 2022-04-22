import React, { useEffect } from "react";
import { GET_ALL_COUNTRIES } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";

const Home = () => {
  const { data, request, loading } = useFetch();

  useEffect(() => {
    const { url, options } = GET_ALL_COUNTRIES();
    request(url, options);
    console.log(data);
  }, [request]);

  if (loading) return <Loading />;
  if (data)
    return (
      <main className={styles.home}>
        <div className={`${styles.countries} container`}>
          {data.map((countrie) => (
            <Card
              flag={countrie.flags.svg}
              name={countrie.name}
              population={countrie.population.toLocaleString("pt-BR")}
              region={countrie.region}
              capital={countrie.capital}
              key={countrie.name}
            />
          ))}
        </div>
      </main>
    );
};

export default Home;
