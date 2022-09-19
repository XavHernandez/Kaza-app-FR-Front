import React from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </React.Fragment>
  );
};

export default App;
