import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/errors/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import AllCar from "./pages/AllCar";
import OneCar from "./pages/OneCar";
import EditCar from "./pages/EditCar";
import NewCar from "./pages/NewCar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCar />} />
        <Route path="/car/:id" element={<OneCar />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
        <Route path="/new-car" element={<NewCar />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
