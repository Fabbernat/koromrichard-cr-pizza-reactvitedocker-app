import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import apiClient from "../api/ApiClient";

const NewPizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const submit = () => {
    apiClient
      .post("/pizzak", pizza)
      .then(() => toast.success("Sikeres hozzáadás!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };
    
    return (
    <>
    <div><h1>Új pizza felvétele a rendszerbe</h1></div>
    <form>
        <h2>Név:</h2>
        <input
        type="text"
        value={pizza.nev}
        onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        value={pizza.leiras}
        onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={pizza.ar}
        onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        value={pizza.imageUrl}
        onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
      />
        <div>
            <button style={{ margin: '10px' }} onClick={submit}>Pizza felvétele</button>
        </div>
    </form>
    </>
    )
}

export default NewPizza