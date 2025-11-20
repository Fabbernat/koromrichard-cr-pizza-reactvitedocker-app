import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/PizzaPage.tsx'
import NewPizza from './pages/NewPizza.tsx'
import Pizzak from './pages/Pizzak.tsx'
import { EditPizza } from './pages/EditPizza.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* All pages share MainLayout */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/*" element={<MainLayout />}></Route>
        {/* Landing page */}
        <Route index element={<App />} />

        {/* Valid pages */}
        <Route path="/pizzak" element={<Pizzak />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />

        {/* ✅ Redirect specific invalid path */}
        <Route path="edit-pizza" element={<Navigate to="/" replace />} />

        {/* ✅ Catch-all for any other invalid path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
