import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function NavBar() {

    const { isAuth, logout, role } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="outer-content-container main-navigation">

            <div className="inner-nav-container">

                <div className="nav-item">
                    <ul className="main-navigation-links">
                        <li className="nav-logo"><Link to="/">relatives</Link></li>

                        {isAuth && (
                            <>
                                <li><Link to="/allrelatives">Show</Link></li>
                                <li><Link to="/newrelative">Add</Link></li>
                                <li><Link to="/searchrelative">Search</Link></li>
                            </>
                        )}
                    </ul>

                </div>


                {/*REGISTER IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGIN IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
                {/*LOGOUT IS ALLEEN ZICHTBAAR ALS LOGIN TRUE IS*/}
                {/*YOUR ACCOUNT IS ALLEEN ZICHTBAAR ALS ROLE DESIGNER IS*/}
                <div className="nav-item">

                    <ul className="main-navigation-links">

                        {isAuth ? (
                            <>
                                <li><Link to="/designers/4001">Your Account</Link></li>
                                <li><Link to="/" onClick={logout}>Logout</Link></li>

                            </>
                        ) : (
                            <>

                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;