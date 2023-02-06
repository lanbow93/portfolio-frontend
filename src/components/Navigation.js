import { Link } from "react-router-dom";
function Navigation(props) {
    return <nav>
       <Link to="/" ><img src="https://static.wixstatic.com/media/8ee8bf_ba71b913edb14fbab458507a9c66dcc0~mv2.png" alt="Logo with the initials LBJ" /></Link>
       <Link to="/" className="navLink">Home</Link>
       <Link to="/about" className="navLink">About</Link>
       <Link to="/projects" className="navLink">Projects</Link>
    </nav>
};
export default Navigation;