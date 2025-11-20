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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllPizza from './pages/AllPizza.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />}>
          <Route index element={<App />} />
          <Route path="pizzak" element={<Pizzak />} />
          <Route path="pizzak/:id" element={<PizzaPage />} />
          <Route path="new-pizza" element={<NewPizza />} />
          <Route path="edit-pizza/:id" element={<EditPizza />} />
          <Route path="edit-pizza" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
)


