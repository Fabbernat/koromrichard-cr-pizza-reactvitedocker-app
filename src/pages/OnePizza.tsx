import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../api/apiClient";

const OnePizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  return (
    <>
      {pizza ? (
        <>
          <h1>{pizza.nev}</h1>
          <h2>{pizza.leiras}</h2>
          <img width={200} src={`${baseURL}/kepek/${pizza.imageUrl}`} />
        </>
      ) : (
        <>A pizza nem található!</>
      )}
    </>
  );
};

export default OnePizza;
