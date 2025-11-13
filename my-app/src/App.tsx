import { useEffect, useState } from 'react'
import './App.css'
import type { Pizza } from './types/Pizza'
import { apiClient, BACKEND_URL } from './api/ApiClient' // az `apiClient` kimozdítható a {}-en kívülre
import { Link, Route, Routes } from 'react-router-dom'
import Pizzak from './pages/Pizzak'
import PizzaPage from './pages/PizzaPage'
import NewPizza from './pages/NewPizza'
import EditPizza from './pages/EditPizza'

function App() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([])

  useEffect(() => {
    apiClient.
      get('/pizzak')
      .then((response) => setPizzak(response.data))
      .catch((result) => console.error(result))
  }, [])

  return (
    <>
      <p>HELLÓ!!!</p>
      <div>
        <Link to="/"><h1>Főoldal</h1></Link>
          <Link to="/pizzak"><h2>Pizzák</h2></Link>
          
        <nav style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          backgroundColor: "#fffb00ff",
        }}>
          
          <Link to="/pizzak/1"><h3>Pizza 1</h3></Link>
          <Link to="/pizzak/2"><h3>Pizza 2</h3></Link>
          <Link to="/pizzak/3"><h3>Pizza 3</h3></Link>
          <Link to="/pizzak/4"><h3>Pizza 4</h3></Link>
          <Link to="/pizzak/5"><h3>Pizza 5</h3></Link>
          <Link to="/pizzak/6"><h3>Pizza 6</h3></Link>
          <Link to="/pizzak/7"><h3>Pizza 7</h3></Link>
          <Link to="/pizzak/8"><h3>Pizza 8</h3></Link>
          <Link to="/pizzak/9"><h3>Pizza 9</h3></Link>
          <Link to="/pizzak/10"><h3>Pizza 10</h3></Link>
          <Link to="/pizzak/11"><h3>Pizza 11</h3></Link>
          <Link to="/pizzak/12"><h3>Pizza 12</h3></Link>
          <Link to="/pizzak/13"><h3>Pizza 13</h3></Link>
          <Link to="/pizzak/14"><h3>Pizza 14</h3></Link>
          <Link to="/pizzak/15"><h3>Pizza 15</h3></Link>
          <Link to="/pizzak/16"><h3>Pizza 16</h3></Link>

          <br />
          <Link to="new-pizza"><h3>Új pizza</h3></Link>
          <br />
          <Link to="edit-pizza/1"><h3>Pizza szerkesztése</h3></Link>

        </nav>
        <Routes>
          <Route path="/pizzak" element={<Pizzak />} />
          <Route path="/pizzak/:id" element={<PizzaPage />} />
          <Route path="/new-pizza" element={<NewPizza />} />
          <Route path="/edit-pizza/:id" element={<EditPizza />} />
        </Routes>
      </div>
      <h1>Ajánlataink:</h1>
      {pizzak.map((pizza) => (
        <div key={pizza.id}>
          <h2>{pizza.nev}</h2>
          <p>{pizza.leiras}</p>
          <p>{pizza.ar} Ft</p>
          <img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} alt={pizza.nev} width={300} />
        </div>
      ))}
    </>
  )
}

export default App
