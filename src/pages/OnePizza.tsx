import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../api/apiClient";
import { Button, Col, Container, Row } from "react-bootstrap";

const OnePizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setPizza] = useState<Car>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const deletePizza = () => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => {
        toast.success("Sikeres törlés!");
        navigate("/"); // kezdőlapra irányítás
      })
      .catch(() => toast.error("Sikertelen törlés!"));
  };

  const editPizza = () => {
    navigate(`/edit-car/${id}`);
  };

  return (
    <Container>
      {car ? (
        <Row>
          <Col sm={8}>
            <h1>{car.marka}</h1>
            <h2>{car.leiras}</h2>

            <Button variant="warning" onClick={editPizza}>
              Szerkesztés
            </Button>
            <Button variant="danger" onClick={deletePizza}>
              Törlés
            </Button>
          </Col>
          <Col sm={4}>
            {car.images.map((img, i) => (
              <img key={i} width={200} src={`${baseURL}/kepek/${img}`} />
            ))}
          </Col>
        </Row>
      ) : (
        <>A car nem található!</>
      )}
    </Container>
  );
};

export default OnePizza;
