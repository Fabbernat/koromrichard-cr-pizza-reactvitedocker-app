import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PizzaPage from './pages/PizzaPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pizzak" element={<App />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
