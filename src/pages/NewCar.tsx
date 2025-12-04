import { useState } from "react";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Car } from "../types/Car";

const NewCar = () => {
  const [car, setCar] = useState<Car>({
    id: 0,
    marka: "",
    modell: "",
    evjarat: 0,
    futas_km: 0,
    uzemanyag: "",
    valto: "",
    szin: "",
    ar: 0,
    images: [],
    leiras: "",
  });

  const submit = () => {
    apiClient
      .post("/cars", car)
      .then(() => {
        toast.success("Jármű sikeresen létrehozva");
      })
      .catch(() => toast.error("A jármű létrehozása sikertelen volt"));
  };

  return (
    <>
      <h1>Márka:</h1>
      <input
        type="text"
        value={car.marka}
        onChange={(e) => setCar({ ...car, marka: e.target.value })}
      />

      <h1>Modell:</h1>
      <input
        type="text"
        value={car.modell}
        onChange={(e) => setCar({ ...car, modell: e.target.value })}
      />

      <h1>Leírás:</h1>
      <textarea
        value={car.leiras}
        onChange={(e) => setCar({ ...car, leiras: e.target.value })}
      />

      <br />
      <button onClick={submit}>Mentés</button>
    </>
  );
};

export default NewCar;