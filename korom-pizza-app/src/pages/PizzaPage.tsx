import { useParams } from "react-router-dom";
import {apiClient, BACKEND_URL } from '../api/ApiClient';
import { useState, useEffect } from "react";
import type { Pizza } from '../types/Pizza';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza | null>(null);

    useEffect(() => {
        apiClient.get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((error) => toast.error(error));
    }, [id]);

    const generateCard = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
        }

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