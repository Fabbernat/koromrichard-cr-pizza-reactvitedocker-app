import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/ApiClient";

export const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<typeof Pizza | null>(null);

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
                <h2>{typeof pizza}</h2>
                <p>{typeof pizza}</p>
                <p>{typeof pizza} Ft</p>
                <img src={`${BACKEND_URL}/kepek/${typeof pizza}`} alt={typeof pizza} width={200} />
            </div>
        ) : (
            <p>Nincs pizza 😥 🍕🚫</p>
        )}
    </>
    )
}

export default Pizza