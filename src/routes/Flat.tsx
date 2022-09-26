import type Flat from "../entities/Flat.interface";
import React from "react";
import { useLoaderData } from "react-router-dom";
import getFlatData from "../api/getFlatData";

const FlatPage: React.FunctionComponent = () => {
  const flatData = useLoaderData() as Flat;

  return <h2>{flatData.title}</h2>;
};

export function loader({ params }: any) {
  return getFlatData(params.id);
}

export default FlatPage;
