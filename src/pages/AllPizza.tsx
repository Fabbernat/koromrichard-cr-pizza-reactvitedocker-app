import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((Response) => setPizzak(Response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  return (
    <>
      {pizzak.map((p) => (
        <div>
          <Link to={`/pizza/${p.id}`}>
            <h1>{p.nev}</h1>
            <h2>{p.leiras}</h2>
            <img width={200} src={`${baseURL}/kepek/${p.imageUrl}`} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default AllPizza;
