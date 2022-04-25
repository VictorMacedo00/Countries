import React, { useContext, useEffect, useState } from "react";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIE,
  GET_COUNTRIES_AT_CONTINENT,
} from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";
import { ReactComponent as SearchIcon } from "./../../Assets/search-icon.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import NotFound from "../Pages/NotFound/NotFound";
import { Navigate } from "react-router-dom";
import Button from "../Button/Button";
import CountrieNotFound from "../Pages/CountrieNotFound/CountrieNotFound";

const Home = () => {
  const { data, request, loading, setData } = useFetch();
  const [search, setSearch] = useState("");

  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    const { url, options } = GET_ALL_COUNTRIES();
    request(url, options);
  }, [request]);

  const getCountriesAtContinent = async (continent) => {
    const { url, options } = GET_COUNTRIES_AT_CONTINENT(continent);
    request(url, options);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search === "") {
      alert("Insira um valor");
    } else {
      const { url, options } = GET_COUNTRIE(search);
      request(url, options);
    }
  };

  if (loading) return <Loading />;
  if (data)
    return (
      <main
        className={`${styles.home} ${
          theme ? styles.darkTheme : styles.lightTheme
        }`}
      >
        <div className={`${styles.form} container`}>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.formItem}`}>
              <button
                className={`${theme ? styles.formDark : styles.formLight}`}
                tipe="submit"
              >
                {<SearchIcon fill={theme ? "#fff" : "#000"} />}
              </button>
              <input
                className={`${theme ? styles.formDark : styles.lightDark}`}
                placeholder="Search for a country..."
                onChange={({ target }) => setSearch(target.value)}
                value={search}
                type="text"
              />
            </div>
          </form>

          <select
            className={`${theme ? styles.formDark : styles.lightDark}`}
            onChange={({ target }) => getCountriesAtContinent(target.value)}
          >
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
          {(data.status !== 404) ? data.map((countrie) => (
            <Card
              flag={countrie.flags.svg}
              name={countrie.name}
              population={countrie.population.toLocaleString("pt-BR")}
              region={countrie.region}
              capital={countrie.capital}
              key={countrie.name}
            />
          )) : <CountrieNotFound />}
        </div>
      </main>
    );
  else {
    <NotFound />;
  }
};

export default Home;
