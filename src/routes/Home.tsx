import React from "react";
import { useLoaderData } from "react-router-dom";
import type Flat from "../entities/Flat.interface";
import getFlatsData from "../api/getFlatsData";

const Home: React.FunctionComponent = () => {
  const flatsData = useLoaderData() as Flat[];

  return (
    <React.Fragment>
      <h2>Home</h2>
      {flatsData.map((flat) => {
        return <p key={flat.id}>{flat.title}</p>;
      })}
    </React.Fragment>
  );
};

export function loader() {
  return getFlatsData();
}

export default Home;
