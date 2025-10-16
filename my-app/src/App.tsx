import { useEffect, useState } from 'react'
import './App.css'
import type { Pizza } from './types/Pizza'
import apiClient, { BACKEND_URL } from './api/ApiClient' // az `apiClient` kimozdítható a {}-en kívülre

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
