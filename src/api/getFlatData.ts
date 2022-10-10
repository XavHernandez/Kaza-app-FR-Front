import type Flat from "../entities/Flat.interface";
import json from "./data.json";

async function getFlatData(param: string | undefined) {
  // const response = await fetch("src/api/data.json");
  // if (!response.ok) throw new Error("Une erreur est survenue au chargement");
  // const flatsData: Flat[] = await response.json();
  const flatsData: Flat[] = json;
  const flat = flatsData.find((flat) => flat.id === param);
  if (!flat) throw new Error("Aucun id correspondant");
  return flat;
}

export default getFlatData;
