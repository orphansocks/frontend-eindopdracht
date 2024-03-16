import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function NavBar() {
    const navigate = useNavigate();
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <nav className="outer-content-container main-navigation">

            <div className="inner-nav-container">

                <div className="nav-item">
                    <ul className="main-navigation-links">
                        <li className="nav-logo"><Link to="/">relatives</Link></li>
                        <li><Link to="/allrelatives">Show</Link></li>
                        <li><Link to="/newrelative">Add</Link></li>
                        <li><Link to="/searchrelative">Search</Link></li>
                    </ul>
                </div>


                {/*REGISTER IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGIN IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGOUT IS ALLEEN ZICHTBAAR ALS LOGIN TRUE IS*/}
                {/*YOUR ACCOUNT IS ALLEEN ZICHTBAAR ALS ROLE DESIGNER IS*/}
                <div className="nav-item">
                <ul className="main-navigation-links ">
                    <li><Link to="/designers/4001">your account</Link></li>
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