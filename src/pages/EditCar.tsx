import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import type { Car } from "../types/Car";



const EditCar = () => {
  const { id } = useParams<{ id: string }>();

  const [car, setCar] = useState<Car | null>({
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

  useEffect(() => {
    apiClient
      .get(`/cars/${id}`)
      .then((response) => setCar(response.data))
      .catch(() => toast.error("A jármű adatainak lekérése sikertelen volt"));
  }, [id]);

  const submit = () => {
    const dto = {
      marka: car?.marka,
      modell: car?.modell,
      evjarat: car?.evjarat,
      futas_km: car?.futas_km,
      uzemanyag: car?.uzemanyag,
      valto: car?.valto,
      szin: car?.szin,
      ar: car?.ar,
      images: car?.images,
      leiras: car?.leiras,
    };

    apiClient
      .put(`/cars/${id}`, dto)
      .then(() => {
        toast.success("Jármű sikeresen frissítve");
      })
      .catch(() => toast.error("A jármű frissítése sikertelen volt"));
  };

  return (
    <>
      <h1>Márka:</h1>
      <input
        type="text"
        value={car?.marka}
        onChange={(e) => setCar({ ...car!, marka: e.target.value })}
      />

      <h1>Modell:</h1>
      <input
        type="text"
        value={car?.modell}
        onChange={(e) => setCar({ ...car!, modell: e.target.value })}
      />

      <h1>Leírás:</h1>
      <textarea
        value={car?.leiras}
        onChange={(e) => setCar({ ...car!, leiras: e.target.value })}
      />

      <br />
      <button onClick={submit}>Mentés</button>
    </>
  );
};

export default EditCar;