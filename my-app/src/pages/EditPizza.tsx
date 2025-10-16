import { useEffect, useState } from "react";
import apiClient from "../api/ApiClient";
import type { Pizza } from "../types/Pizza";

export const EditPizza = () => {
    const id = (new URL(document.location.toString())).pathname.split("/").at(-1);
    if (!id) {
        return <div>Nincs id megadva</div>;
    }
    const [nev, setNev] = useState<string>('');
    const [leiras, setLeiras] = useState<string>('');
    const [ar, setAr] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        apiClient
            .get(`/pizzak/${Number(id)}`)
            .then((response) => {
                setNev(response.data.nev ?? "");
                setLeiras(response.data.leiras ?? "");
                setAr(Number(response.data.ar) ?? 0);
                setImageUrl(response.data.imageUrl ?? "");
            })
            .catch((result) => console.error(result));
    }, [id]);

    const onSubmit = () => {
        const pizza: Pizza = {
            id: Number(id),
            nev,
            leiras,
            ar,
            imageUrl
        };

        apiClient
            .put(`/pizzak/${Number(id)}`, pizza)
            .then((response) => alert(response.statusText))
            .catch((result) => console.error("Hiba a pizza módosításakor:", result));
    };

    return (
        <>
            <h1>Pizza szerkesztése</h1>

            <h2>Név:</h2>
            <input type="text" placeholder="Név" value={nev} onChange={(e) => setNev(e.target.value)} />

            <h2>Leírás:</h2>
            <input type="text" placeholder="Leírás" value={leiras} onChange={(e) => setLeiras(e.target.value)} />

            <h2>Ár:</h2>
            <input type="number" placeholder="Ár" value={ar} onChange={(e) => setAr(Number(e.target.value))} />

            <h2>Kép URL:</h2>
            <input type="text" placeholder="Kép URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <button onClick={onSubmit}>Módosít</button>
        </>
    )
}

export default EditPizza