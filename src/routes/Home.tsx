import React, { useEffect, useState } from "react";

const Home: React.FunctionComponent = () => {
  const [flats, setFlats] = useState(null);

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
