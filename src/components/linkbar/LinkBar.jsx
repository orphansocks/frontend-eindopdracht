import './LinkBar.css';
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

function LinkBar({ linkTo, linkText }) {
    const { auth } = useContext(AuthContext);

    // Function to show login/register message
    const loginMessage = () => {
        return (
            <p>
                if your content is not showing, please
                <Link to="/login"> login</Link> or
                <Link to="/register"> register</Link> first
            </p>
        );
    };

    return (
        <section className="outer-content-container">
            <div className="inner-content-container link-bar">

                {!auth && loginMessage()}
                
                <span>
                    <Link to={linkTo} className="link-bar-link">
                        <p>{linkText}</p>
                    </Link>
                </span>
            </div>
        </section>
    );
}

export default LinkBar;
