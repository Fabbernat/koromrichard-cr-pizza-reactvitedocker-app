import { useState, useEffect } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { apiClient, BACKEND_URL } from "../api/ApiClient";
import type { Pizza } from "../types/Pizza";

export const NewPizza = () => {
    const { id } = useParams();
    const [nev, setNev] = useState<string>('');
    const [leiras, setLeiras] = useState<string>('');
    const [ar, setAr] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        apiClient.get(`/pizzak/${Number(id)}`)
        .then((response) => {
            setLeiras(response.data.leiras ?? "");
        })
        .catch((error) => console.error(error));
    }, [id]);
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPizza: Pizza = { id: 0, nev, leiras, ar, imageUrl };
        apiClient.post('/pizzak', newPizza)
            .then((response) => {
                console.log('Pizza added:', response.data); 
                setNev('');
                setLeiras('');
                setAr(0);
                setImageUrl('');
            })
            .catch((error) => console.error('Error adding pizza:', error));
    }
    
    return (
    <>
    <h2>Név:</h2>
    <input type="text" placeholder="Név" value={nev} onChange={(e) => setNev(e.target.value)} />
    <h2>Leírás:</h2>
    <input type="text" placeholder="Leírás" value={leiras} onChange={(e) => setLeiras(e.target.value)} />
    <h2>Ár:</h2>
    <input type="number" placeholder="Ár" value={ar} onChange={(e) => setAr(Number(e.target.value))} />
    <h2>Kép URL:</h2>
    <input type="text" placeholder="Kép URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
    <button onClick={onSubmit}>Add Pizza</button>
    </>
    )
}

export default NewPizza