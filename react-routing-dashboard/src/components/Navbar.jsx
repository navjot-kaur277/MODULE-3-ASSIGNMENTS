import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyRouterApp</div>
      <div className="nav-links">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
