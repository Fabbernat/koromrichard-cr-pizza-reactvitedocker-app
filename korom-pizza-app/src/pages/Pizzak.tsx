import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {apiClient, BACKEND_URL } from '../api/ApiClient';

export const Pizzak = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<typeof Pizzak | null>(null);

    useEffect(() => {
        apiClient.get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
    <>
    <h1>Pizzák:</h1>
    
        {pizza ? (
            <div>
                <h2>{typeof pizza}</h2>
                <p>{typeof pizza}</p>
                <p>{typeof pizza} Ft</p>
                <img src={`${BACKEND_URL}/kepek/${typeof pizza}`} alt={typeof pizza} width={200} />
            </div>
        ) : (
            <>
            <p>Nem találtunk pizzát 😥 🚫💀🤡🥀</p>
            <sub>De tessék, itt egy pizza:</sub>
            <h1>🍕</h1>
            </>
        )}
    </>
    )
}

export default Pizzak