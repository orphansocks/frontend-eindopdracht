import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate();

    return (
        <nav className="outer-content-container main-navigation">
            <div className="inner-nav-container">
                <h2>Relatives of logo</h2>
                <ul className="main-navigation-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allrelatives">Show All</Link></li>
                    <li><Link to="/newrelative">Toevoegen</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;