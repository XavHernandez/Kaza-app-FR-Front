import type Flat from "../entities/Flat.interface";
import React from "react";
import { useLoaderData } from "react-router-dom";
import getFlatData from "../api/getFlatData";
import styles from "./Flat.module.scss";
import Carroussel from "../components/Flat/Carroussel";
import Rating from "../components/Flat/Rating";
import Accordion from "../components/About/Accordion";

const FlatPage: React.FunctionComponent = () => {
  const flatData = useLoaderData() as Flat;
  const flatPictures = flatData.pictures;

  const description = (): JSX.Element => {
    return <p>{flatData.description}</p>;
  };

  const equipments = (): JSX.Element => {
    return (
      <div className={styles.equipments}>
        {flatData.equipments.map((equipment) => {
          return <div className={styles.equipment}>{equipment}</div>;
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Carroussel pictures={flatPictures} />
      <section className={styles.infos}>
        <div className={styles.infos_flat}>
          <div className={styles.infos_name}>{flatData.title}</div>
          <div className={styles.infos_location}>{flatData.location}</div>
          <div className={styles.infos_tags}>
            {flatData.tags.map((tag) => {
              return <div className={styles.infos_tag}>{tag}</div>;
            })}
          </div>
        </div>
        <div className={styles.infos_host}>
          <Rating rating={flatData.rating} />
          <div className={styles.infos_hostdetails}>
            <div className={styles.infos_hostname}>{flatData.host.name}</div>
            <picture className={styles.infos_hostpicture}>
              <img src={flatData.host.picture} alt={flatData.host.name} />
            </picture>
          </div>
        </div>
      </section>
      <div className={styles.accordions}>
        <Accordion title={"Description"} children={description()} />
        <Accordion title={"Equipements"} children={equipments()} />
      </div>
    </React.Fragment>
  );
};

export function loader({ params }: any) {
  return getFlatData(params.id);
}

export default FlatPage;
