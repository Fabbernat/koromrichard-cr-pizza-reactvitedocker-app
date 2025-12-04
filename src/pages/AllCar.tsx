import { useState, useEffect } from "react";
import { Col, Button, Card, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient, {baseURL} from "../api/apiClient";
import type { Car } from "../types/Car";

const AllCar = () => {
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
          <Card.Img variant="top" src={p.images.map(image => `${baseURL}/kepek/${image}`).join(", ")} />
          <Card.Body>
            <Card.Title>{p.modell}</Card.Title>
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

export default AllCar;