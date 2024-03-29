import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom';
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import isTokenValid from "../../helpers/isTokenValid.jsx";

function NavBar() {

    const { auth, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect( () => {
        console.log("isAuth", auth)
    }, [auth] );


    return (
        <nav className="outer-content-container main-navigation">

            <div className="inner-nav-container">

                <div className="nav-item">
                    <ul className="main-navigation-links">
                        <li className="nav-logo"><Link to="/">relatives</Link></li>

                        { auth.isAuth && (
                            <>
                                <li><Link to="/allrelatives">Show</Link></li>
                                <li><Link to="/newrelative">Add</Link></li>
                                <li><Link to="/searchrelative">Search</Link></li>
                            </>
                        )}
                    </ul>

                </div>

                <div className="nav-item">

                    <ul className="main-navigation-links">

                        {auth.isAuth ? (
                            <>
                                {auth.user && (auth.user.role === 'ROLE_DESIGNER' || auth.user.role === 'ROLE_ADMIN') && (
                                    <li><Link to="/designers/4001">Your Account</Link></li>
                                )}
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