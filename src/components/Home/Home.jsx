import React, { useEffect } from "react";
import { GET_ALL_COUNTRIES } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Home.module.css";

const Home = () => {
  const { data, request, loading } = useFetch();

  useEffect(() => {
    const { url, options } = GET_ALL_COUNTRIES();
    request(url, options);
    console.log(data)
  }, [request]);

  if (loading) return <p>Loading...</p>;
  if(data)
  return (
    <main className={styles.home}>
      <div className="container">
          <ul>
              {data.map((item) => (
                  <li>{item.name}</li>
              ))}
          </ul>
      </div>
    </main>
  );
};

export default Home;
