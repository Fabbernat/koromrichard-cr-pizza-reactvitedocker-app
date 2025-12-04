import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const navigate = useNavigate();

  const [cars, setCars] = useState<Array<Car>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  ); // csak ID-kat tárolok

  useEffect(() => {
    apiClient
      .get("/cars")
      .then((response) => setCars(response.data))
      .catch(() => toast.error("Az autók betöltése sikertelen volt"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Car) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => navigate(`/car/${p.id}`)}
              variant="primary"
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeresen a kosárba tetted a terméket!");
              }}
              variant="success"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {cars.map((i) => generateCard(i))}
      </Row>
    </Container>
  );
};

export default AllPizza;
