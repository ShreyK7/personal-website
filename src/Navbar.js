import "./App.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navBar">
            <ul className="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/thoughts">Thoughts</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;