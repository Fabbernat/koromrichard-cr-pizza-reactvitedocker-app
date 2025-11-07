import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const NewPizza = () => {
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    apiClient
      .post("/pizzak", p)
      .then(() => toast.success("Sikeres hozzáadás!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <>
      <h1>Név:</h1>
      <input type="text" onChange={(e) => setNev(e.target.value)} />

      <h1>Leírás</h1>
      <input type="text" onChange={(e) => setLeiras(e.target.value)} />

      <h1>Ár</h1>
      <input type="number" onChange={(e) => setAr(Number(e.target.value))} />

      <h1>setImageUrl</h1>
      <input type="text" onChange={(e) => setImageUrl(e.target.value)} />

      <br />
      <button onClick={submit}>Hozzáadás</button>
    </>
  );
};

export default NewPizza;
