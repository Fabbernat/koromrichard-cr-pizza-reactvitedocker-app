import { use, useEffect, useState } from "react";
import apiClient  from '../api/ApiClient';
import type { Pizza } from '../types/Pizza';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const EditPizza = () => {
    const { id } = useParams();

  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  
    const [nev, setNev] = useState<string>('');
    const [leiras, setLeiras] = useState<string>('');
    const [ar, setAr] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        apiClient
            .get(`/pizzak/${Number(id)}`)
            .then((response) => setPizza(response.data))
            .catch(() => toast.error("Hiba a pizza lekérésekor!"));
    }, [id]);

    const submit = () => {
    const dto = {
      nev: pizza.nev,
      leiras: pizza.leiras,
      ar: pizza.ar,
      imageUrl: pizza.imageUrl,
    };

    apiClient
      .put(`/pizzak/${id}`, dto)
      .then(() => toast.success("Sikeres szerkesztés!"))
      .catch(() => toast.error("Sikertelen szerkesztés!"));
  };

    return (
        <>
            <h1>Pizza szerkesztése</h1>

            <h1>Név:</h1>
      <input
        type="text"
        value={pizza.nev}
        onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        value={pizza.leiras}
        onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={pizza.ar}
        onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        value={pizza.imageUrl}
        onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
      />

      <br />
      <button onClick={submit}>Módosít</button>
        </>
    )
}

export default EditPizza