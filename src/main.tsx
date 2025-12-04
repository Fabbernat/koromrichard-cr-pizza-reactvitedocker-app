import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllPizza from "./pages/AllPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OnePizza from "./pages/OnePizza";
import NewPizza from "./pages/NewPizza";
import EditPizza from "./pages/EditPizza";
import NotFoundPage from "./pages/errors/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/car/:id" element={<OnePizza />} />
        <Route path="/edit-car/:id" element={<EditPizza />} />
        <Route path="/new-car" element={<NewPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
