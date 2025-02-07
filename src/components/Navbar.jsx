import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-white py-4 px-6 flex justify-between items-center rounded-full m-8">
      <div className="logo text-2xl font-bold">My Portfolio</div>
      <ul className="nav-links flex space-x-70">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
