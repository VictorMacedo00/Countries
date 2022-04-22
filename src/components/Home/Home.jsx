import React, { useEffect } from "react";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_AT_CONTINENT,
  GET_COUNTRIE_AT_CONTINENT,
} from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";

const Home = () => {
  const { data, request, loading, setData } = useFetch();

  useEffect(() => {
    const { url, options } = GET_ALL_COUNTRIES();
    request(url, options);
    console.log(data);
  }, [request]);

  const getCountriesAtContinent = async (continent) => {
    const { url, options } = GET_COUNTRIES_AT_CONTINENT(continent);
    request(url, options);
  };

  if (loading) return <Loading />;
  if (data)
    return (
      <main className={styles.home}>
        <div className="container">
          <form>
            <div className="formItem">
              <button>O</button>
              <input type="text" />
            </div>
          </form>
          <select onChange={({target}) => getCountriesAtContinent(target.value)}>
            <option selected disabled value="">
              Filter by Region
            </option>
            <option value="africa">África</option>
            <option value="americas">Américas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
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
