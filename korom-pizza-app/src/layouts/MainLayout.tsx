import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* ✅ Navbar appears on every page */}
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          backgroundColor: "#fffb00ff",
          padding: "1rem"
        }}
      >
        <Link to="/">Főoldal</Link>
        <Link to="/pizzak">Pizzák</Link>
        <Link to="/new-pizza">Új pizza</Link>
        <Link to="/edit-pizza/1">Pizza szerkesztése</Link>
      </nav>

      {/* ✅ This is where each page gets rendered */}
      <div className="container">
      <h1>Pizza Layout</h1>
      <Outlet />
    </div>
    </div>
  );
}
