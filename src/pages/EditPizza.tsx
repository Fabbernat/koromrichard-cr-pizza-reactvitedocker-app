import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditPizza = () => {
  const { id } = useParams();

  const [car, setPizza] = useState<Car>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    const dto = {
      nev: car.nev,
      leiras: car.leiras,
      ar: car.ar,
      imageUrl: car.imageUrl,
    };

    apiClient
      .put(`/pizzak/${id}`, dto)
      .then(() => toast.success("Sikeres szerkesztés!"))
      .catch(() => toast.error("Sikertelen szerkesztés!"));
  };

  return (
    <>
      <h1>Név:</h1>
      <input
        type="text"
        value={car.nev}
        onChange={(e) => setPizza({ ...car, nev: e.target.value })}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        value={car.leiras}
        onChange={(e) => setPizza({ ...car, leiras: e.target.value })}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={car.ar}
        onChange={(e) => setPizza({ ...car, ar: Number(e.target.value) })}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        value={car.imageUrl}
        onChange={(e) => setPizza({ ...car, imageUrl: e.target.value })}
      />

      <br />
      <button onClick={submit}>Szerkesztés</button>
    </>
  );
};

export default EditPizza;
