import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/PizzaPage.tsx'
import NewPizza from './pages/NewPizza.tsx'
import Pizzak from './pages/Pizzak.tsx'
import { EditPizza } from './pages/EditPizza.tsx'
import MainLayout from './layouts/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Minden oldalba belekerül a MainLayout */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/*" element={<MainLayout />}></Route>

        {/* Kezdőlap */}
        <Route index element={<App />} />

        {/* Érvényes oldalak */}
        <Route path="/pizzak" element={<Pizzak />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />

        {/* Ez még nem létezik */}
        <Route path="edit-pizza" element={<Navigate to="/" replace />} />

        {/* Elkap minden invalid path-ot */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
