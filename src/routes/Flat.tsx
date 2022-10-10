import type Flat from "../entities/Flat.interface";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFlatData from "../api/getFlatData";
import styles from "./Flat.module.scss";
import Carroussel from "../components/Flat/Carroussel";
import Rating from "../components/Flat/Rating";
import Accordion from "../components/About/Accordion";

const FlatPage: React.FunctionComponent = () => {
  const [flatData, setFlatData] = useState<Flat>();
  const [flatPictures, setFlatPictures] = useState<string[]>();
  const [flatRating, setFlatRating] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    const fetchFlat = async () => {
      const data = await getFlatData(id);
      setFlatData(data);
      setFlatPictures(data.pictures);
      setFlatRating(data.rating);
    };
    fetchFlat();
  }, []);

  const description = (): JSX.Element => {
    return <p>{flatData?.description}</p>;
  };

  const equipments = (): JSX.Element => {
    return (
      <div className={styles.equipments}>
        {flatData?.equipments.map((equipment) => {
          return <div className={styles.equipment}>{equipment}</div>;
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Carroussel pictures={flatPictures!} />
      <section className={styles.infos}>
        <div className={styles.infos_flat}>
          <div className={styles.infos_name}>{flatData?.title}</div>
          <div className={styles.infos_location}>{flatData?.location}</div>
          <div className={styles.infos_tags}>
            {flatData?.tags.map((tag) => {
              return (
                <div className={styles.infos_tag} key={tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.infos_host}>
          <Rating rating={flatRating!} />
          <div className={styles.infos_hostdetails}>
            <div className={styles.infos_hostname}>{flatData?.host.name}</div>
            <picture className={styles.infos_hostpicture}>
              <img src={flatData?.host.picture} alt={flatData?.host.name} />
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

export default FlatPage;
