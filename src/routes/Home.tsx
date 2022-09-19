import React, { useEffect, useState } from "react";
import type Flat from "../entities/Flat.interface";

const Home: React.FunctionComponent = () => {
  const [flats, setFlats] = useState<Flat[]>([]);

  useEffect(() => {
    const getFlats = async () => {
      fetch("src/api/data.json")
        .then((response) => response.json())
        .then((data) => setFlats(data));
    };
    getFlats();
  }, []);

  return <h2>Home</h2>;
};

export default Home;
