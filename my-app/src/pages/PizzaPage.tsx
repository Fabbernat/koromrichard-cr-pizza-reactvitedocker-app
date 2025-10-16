import { useParams } from "react-router-dom";
import {apiClient, BACKEND_URL } from "../api/ApiClient";
import { useState, useEffect } from "react";
import type { Pizza } from "../types/Pizza";

export const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza | null>(null);

    useEffect(() => {
        apiClient.get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
    <>
    <h1>Ez egy pizza</h1>
        {pizza ? (
            <div>
                <h2>{pizza.nev}</h2>
                <p>{pizza.leiras}</p>
                <p>{pizza.ar} Ft</p>
                <img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} alt={pizza.nev} width={200} />
            </div>
        ) : (
            <p>Nincs pizza 😥 🍕🚫</p>
        )}
    </>
    )
}

export default PizzaPage