import { useState } from "react";
import type { Car } from "../types/Car";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const NewPizza = () => {
  const [car, setPizza] = useState<Car>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const submit = () => {
    apiClient
      .post("/pizzak", car)
      .then(() => toast.success("Sikeres hozzáadás!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
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
      <button onClick={submit}>Hozzáadás</button>
    </>
  );
};

export default NewPizza;
