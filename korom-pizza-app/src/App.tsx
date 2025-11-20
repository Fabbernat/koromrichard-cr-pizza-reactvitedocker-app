import { useEffect, useState, type SetStateAction } from 'react'
import './App.css'
import type { Pizza } from './types/Pizza'
import { apiClient, BACKEND_URL } from './api/ApiClient' // az `apiClient` kimozdítható a {}-en kívülre
import { Link, Route, Routes } from 'react-router-dom'
import Pizzak from './pages/Pizzak'
import PizzaPage from './pages/PizzaPage'
import NewPizza from './pages/NewPizza'
import EditPizza from './pages/EditPizza'
import { Container, Row, Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([])

  useEffect(() => {
    toast.success("Pizzák sikeresen betöltve!");

    apiClient
      .get('/pizzak')
      .then((response: { data: SetStateAction<Pizza[]> }) => setPizzak(response.data))
      .catch((err: any) => {
        console.error(err)
        toast.error("Hiba a pizzák lekérésekor!") // <-- show error toast
      })
  }, [])


  return (
    <>
    
      <p>HELLÓ!!!</p>
      <div>
        <Link to="/pizzak"><h1>Főoldal</h1></Link>
        <Link to="/pizzak"><h2>Pizzák megtekintése</h2></Link>
        <Link to="new-pizza"><h3>Új pizza létrehozása</h3></Link>
        <nav style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          backgroundColor: "#fffb00ff",
          padding: "1rem"}}>
          {pizzak.map((_, i) => (
            <div key={i}>
              <Link to={`/pizzak/${i}`}><h3>Pizza {i}</h3></Link>
              <Link to={`edit-pizza/${i}`}><h3>Pizza {i} szerkesztése</h3></Link>
              <Link to={`delete-pizza/${i}`}><h3>Pizza {i} törlése</h3></Link>
            </div>
          ))}
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Container>
        <Row>
          {pizzak.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} lg={3} className="mb-4"></Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default App
