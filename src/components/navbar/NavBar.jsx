import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate();

    return (
        <nav className="outer-content-container main-navigation">
            <div className="inner-nav-container">
                <h2>Relatives of logo <Link to="/">Home</Link></h2>
                <ul className="main-navigation-links">
                    <li><Link to="/allrelatives">Show All</Link></li>
                    <li><Link to="/newrelative">Add</Link></li>
                    <li><Link to="/searchrelative">Search and Logout</Link></li>

                </ul>
                <ul className="main-navigation-links">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;