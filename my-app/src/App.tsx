import { useEffect, useState } from 'react'
import './App.css'
import type { Pizza } from './types/Pizza'
import {apiClient,  BACKEND_URL } from './api/ApiClient' // az `apiClient` kimozdítható a {}-en kívülre
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

      <nav>
        {/* Use Link components instead of <a> to avoid reloading */}
        | <Link to="/pizzak">Pizzák</Link>
        <br/>
        | <Link to="/pizzak/1">Pizza 1</Link>
        | <Link to="/pizzak/2">Pizza 2</Link>
        | <Link to="/pizzak/3">Pizza 3</Link>
        | <Link to="/pizzak/4">Pizza 4</Link>
        | <Link to="/pizzak/5">Pizza 5</Link>
        | <Link to='/pizzak/6'>Pizza 6</Link>
        | <Link to='/pizzak/7'>Pizza 7</Link>
        | <Link to='/pizzak/8'>Pizza 8</Link>
        | <Link to='/pizzak/9'>Pizza 9</Link>
        | <Link to='/pizzak/10'>Pizza 10</Link>
        | <Link to='/pizzak/11'>Pizza 11</Link>
        | <Link to='/pizzak/12'>Pizza 12</Link>
        | <Link to='/pizzak/13'>Pizza 13</Link>
        | <Link to='/pizzak/14'>Pizza 14</Link>
        | <Link to='/pizzak/15'>Pizza 15</Link>
        | <Link to='/pizzak/16'>Pizza 16</Link>
        <br/>
        | <Link to='new-pizza'>Új pizza</Link>
        <br/>
        | <Link to='edit-pizza/1'>Pizza szerkesztése</Link>

      </nav>
      <Routes>
        <Route path="/pizzak" element={<Pizzak />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
      </Routes>
      </div>
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
