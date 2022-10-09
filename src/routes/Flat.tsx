import type Flat from "../entities/Flat.interface";
import React from "react";
import { useLoaderData } from "react-router-dom";
import getFlatData from "../api/getFlatData";
import styles from "./Flat.module.scss";
import Carroussel from "../components/Flat/Carroussel";
import Rating from "../components/Flat/Rating";

const FlatPage: React.FunctionComponent = () => {
  const flatData = useLoaderData() as Flat;
  const flatPictures = flatData.pictures;

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
          <div className={styles.infos_hostname}>{flatData.host.name}</div>
          <picture className={styles.infos_hostpicture}>
            <img src={flatData.host.picture} alt={flatData.host.name} />
          </picture>
        </div>
      </section>
    </React.Fragment>
  );
};

export function loader({ params }: any) {
  return getFlatData(params.id);
}

export default FlatPage;
