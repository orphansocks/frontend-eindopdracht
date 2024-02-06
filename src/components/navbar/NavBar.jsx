import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate();

    return (
        <nav className="outer-content-container main-navigation">
            <div className="inner-nav-container">
                <p><Link to="/">relatives</Link></p>
                <ul className="main-navigation-links">
                    <li><Link to="/allrelatives">Show All</Link></li>
                    <li><Link to="/newrelative">Add</Link></li>
                    <li><Link to="/searchrelative">Search</Link></li>

                </ul>
                <ul className="main-navigation-links">
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Logout</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;