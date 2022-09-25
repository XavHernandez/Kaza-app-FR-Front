import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styles from "./App.module.scss";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
