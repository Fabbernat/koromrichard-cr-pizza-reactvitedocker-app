import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PizzaPage from './pages/PizzaPage.tsx'
import NewPizza from './pages/NewPizza.tsx'
import Pizza from './pages/Pizza.tsx'
import { EditPizza } from './pages/EditPizza.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pizzak" element={<Pizza />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
