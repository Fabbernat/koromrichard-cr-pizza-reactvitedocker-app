import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../api/apiClient";
import type { Car } from "../types/Car";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  // pizzák betöltése az API-ról
  const [cars, setCars] = useState<Array<Car>>([]);
  useEffect(() => {
    apiClient
      .get("/cars")
      .then((response) => setCars(response.data))
      .catch(() => toast.error("Az autók betöltése sikertelen volt"));
  }, []);

  // kosár betöltése localStorage-ból vagy üres tömb, ha nincs
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  // ha a kosár változik, akkor elmentjük a localStorage-ba
  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  // elem törlése a kosárból index alapján
  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_v, i) => i !== searchedIndex));
    toast.success("Sikeres törlés!");
  };

  return (
    <>
      <h1>Kosár tartalma</h1>
      <Table striped bordered hover>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {kosar.map((id, index) => {
            const car = cars.find((p) => p.id == id);

            return (
              <tr>
                <td>{car?.images.map((img, i) => (
                  <img key={i} width={200} src={`${baseURL}/kepek/${img}`} />
                ))}</td>
                <td>{car?.modell}</td>
                <td>{car?.ar} Ft</td>
                <td>
                  <Button onClick={() => removeItem(index)} variant="danger">
                    Törlés&nbsp;<FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
