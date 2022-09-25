import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FunctionComponent = () => {
  return (
    <div className={styles.error}>
      <h2 className={styles.error_code}>404</h2>
      <p className={styles.error_message}>Oups! La page que demandez n'existe pas.</p>
      <NavLink to="/" end>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
