import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "./ScrollToSection";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>
      <ul>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("experience")}>Experience</li>
        <li onClick={() => handleScroll("download-cv")}>Download CV</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
