import React from "react";
import { useLoaderData } from "react-router-dom";
import type Flat from "../entities/Flat.interface";
import getFlatsData from "../api/getFlatsData";
import Hero from "../components/Home/Hero";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const flatsData = useLoaderData() as Flat[];

  return (
    <React.Fragment>
      <Hero />
      <section className={styles.flats}>
        <div className={styles.flats_grid}>
          {flatsData.map((flat) => {
            return <p key={flat.id}>{flat.title}</p>;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export function loader() {
  return getFlatsData();
}

export default Home;
