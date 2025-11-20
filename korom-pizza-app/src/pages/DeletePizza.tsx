import { use, useEffect, useState } from "react";
import {apiClient} from "../api/ApiClient";
import type { Pizza } from "../types/Pizza";
import { useParams } from "react-router-dom";

export const EditPizza = () => {
    const {id} = useParams();
    const [nev, deleteNev] = useState<string>('');
    const [leiras, deleteLeiras] = useState<string>('');
    const [ar, deleteAr] = useState<number>(0);
    const [imageUrl, deleteImageUrl] = useState<string>('');

    useEffect(() => {
        apiClient
            .get(`/pizzak/${Number(id)}`)
            .then((response) => {
                deleteNev(response.data.nev ?? "");
                deleteLeiras(response.data.leiras ?? "");
                deleteAr(Number(response.data.ar) ?? 0);
                deleteImageUrl(response.data.imageUrl ?? "");
            })
            .catch((result) => console.error(result));
    }, [id]);

    const onSubmit = () => {
        const pizza: Pizza = {
            nev,
            leiras,
            ar,
            imageUrl
        };

        apiClient
            .delete(`/pizzak/${Number(id)}`)
            .then((response) => alert(response.statusText))
            .catch((result) => console.error("Hiba a pizza törlésekor:", result));
    };

    return (
        <>
            <h1>Pizza szerkesztése</h1>

            <h2>Név:</h2>
            <input type="text" placeholder="Név" value={nev} onChange={(e) => deleteNev(e.target.value)} />

            <h2>Leírás:</h2>
            <input type="text" placeholder="Leírás" value={leiras} onChange={(e) => deleteLeiras(e.target.value)} />

            <h2>Ár:</h2>
            <input type="number" placeholder="Ár" value={ar} onChange={(e) => deleteAr(Number(e.target.value))} />

            <h2>Kép URL:</h2>
            <input type="text" placeholder="Kép URL" value={imageUrl} onChange={(e) => deleteImageUrl(e.target.value)} />
            <button onClick={onSubmit}>Törlés</button>
        </>
    )
}

export default EditPizza