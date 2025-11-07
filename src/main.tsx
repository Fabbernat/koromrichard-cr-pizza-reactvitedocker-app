import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllPizza from "./pages/AllPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OnePizza from "./pages/OnePizza";
import NewPizza from "./pages/NewPizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/pizza/:id" element={<OnePizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
