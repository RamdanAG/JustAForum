import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <Link to="/">Explore</Link> |{" "}
        <Link to="/following">Following</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      {/* Konten Halaman */}
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
