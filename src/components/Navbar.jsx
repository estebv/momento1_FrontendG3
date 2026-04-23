import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">La Reina</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/galpones">Galpones</Link></li>
        <li><Link to="/aves">Aves</Link></li>
        <li><Link to="/huevos">Huevos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
