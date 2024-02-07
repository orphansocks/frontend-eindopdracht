import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate();

    return (
        <nav className="outer-content-container main-navigation">
            <div className="inner-nav-container">
                <div>
                <p><Link to="/">relatives</Link></p>
                </div>

                {/*DEZE DIV WIL JE ALEEN ZIEN WANNEER INGELOGD ISAUTH IS TRUE*/}
                <div>
                <ul className="main-navigation-links">
                    <li><Link to="/allrelatives">Show All</Link></li>
                    <li><Link to="/newrelative">Add</Link></li>
                    <li><Link to="/searchrelative">Search</Link></li>
                </ul>
                </div>

                {/*REGISTER IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGIN IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGOUT IS ALLEEN ZICHTBAAR ALS LOGIN TRUE IS*/}
                <div>
                <ul className="main-navigation-links">
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;