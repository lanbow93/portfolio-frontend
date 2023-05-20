import { Link } from "react-router-dom";
function Navigation(props) {
    return <nav>
       <Link to="/" className="navLink">Home</Link>
       <Link to="/about" className="navLink">About</Link>
       <Link to="/projects" className="navLink">Projects</Link>
       <Link to="/contact" className="navLink">Contact</Link>
    </nav>
};
export default Navigation;