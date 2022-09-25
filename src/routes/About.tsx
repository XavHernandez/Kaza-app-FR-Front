import React from "react";
import Accordion from "../components/About/Accordion";
import Hero from "../components/Home/Hero";
import background from "../assets/hero_about.jpg";
import styles from "./About.module.scss";

const Fiability = (): JSX.Element => {
  return (
    <p>
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux
      logements, et toutes les informations sont réguliérement vérifiées par nos équipes.
    </p>
  );
};

const Respect = (): JSX.Element => {
  return (
    <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
      discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.
    </p>
  );
};

const Service = (): JSX.Element => {
  return (
    <p>
      Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
      N'hésitez pas à nous contacter si vous avez la moindre question.
    </p>
  );
};

const Security = (): JSX.Element => {
  return (
    <p>
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
      logement correspond aux critères de sécurité établis par nos soins services. En laissant une
      note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
      standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
      domestique pour nos hôtes.
    </p>
  );
};

const About: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Hero imageUrl={background} title={false} />
      <section className={styles.about}>
        <Accordion title={"Fiabilité"} children={Fiability()} />
        <Accordion title={"Respect"} children={Respect()} />
        <Accordion title={"Service"} children={Service()} />
        <Accordion title={"Securité"} children={Security()} />
      </section>
    </React.Fragment>
  );
};

export default About;
