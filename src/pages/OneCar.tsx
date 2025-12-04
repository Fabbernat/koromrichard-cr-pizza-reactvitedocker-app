import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Container, Row } from "react-bootstrap";
import type { Car } from "../types/Car";
import apiClient, { baseURL } from "../api/apiClient";

const OneCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    apiClient
      .get(`/cars/${id}`)
      .then((response) =>
        setCar(response.data))
      .catch(() => toast.error("A jármű adatainak lekérése sikertelen volt"));
  }, [id]);

  const deleteCar = () => {
    apiClient
      .delete(`/cars/${id}`)
      .then(() => {
        toast.success("Jármű sikeresen törölve");
        navigate("/");
      })
      .catch(() => toast.error("A jármű törlése sikertelen volt"));
  };

  const editCar = () => {
    navigate(`/edit-car/${id}`);
  };

  return (
    <Container>
      {car ? (
        <Row>
          <Col sm={8}>
            <h1>{car.modell}</h1>
            <h2>{car.leiras}</h2>

            <Button variant="warning" onClick={editCar}>
              Szerkesztés
            </Button>
            <Button variant="danger" onClick={deleteCar}>
              Törlés
            </Button>
          </Col>
          <Col sm={4}>{car.images.map(image => (
            <img
              key={image}
                src={`${baseURL}/${image}`}
                alt={car.modell}
                style={{ width: "100%", marginBottom: "10px" }}
              />
          ))}</Col>
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  )
}

export default OneCar;
