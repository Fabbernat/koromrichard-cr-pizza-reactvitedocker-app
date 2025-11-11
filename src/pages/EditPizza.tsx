import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditPizza = () => {
  const { id } = useParams();

  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => {
        setNev(response.data.nev ?? "");
        setLeiras(response.data.leiras ?? "");
        setAr(Number(response.data.ar ?? 0));
        setImageUrl(response.data.imageUrl ?? "");
      })
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    apiClient
      .put(`/pizzak/${id}`, p)
      .then(() => toast.success("Sikeres szerkesztés!"))
      .catch(() => toast.error("Sikertelen szerkesztés!"));
  };

  return (
    <>
      <h1>Név:</h1>
      <input type="text" value={nev} onChange={(e) => setNev(e.target.value)} />

      <h1>Leírás</h1>
      <input
        type="text"
        value={leiras}
        onChange={(e) => setLeiras(e.target.value)}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={ar}
        onChange={(e) => setAr(Number(e.target.value))}
      />

      <h1>setImageUrl</h1>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <br />
      <button onClick={submit}>Szerkesztés</button>
    </>
  );
};

export default EditPizza;
