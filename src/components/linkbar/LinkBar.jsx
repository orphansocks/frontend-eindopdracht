import './LinkBar.css';
import {Link} from "react-router-dom";
import React from "react";

function LinkBar({linkTo, linkText}) {

    return (
        <section className="outer-content-container">
            <div className="inner-content-container link-bar">

                <p>if your content is not showing, please <Link to="/login">login</Link> or <Link to="/register">register</Link> first</p>

                     <span>
                    <Link to={linkTo} className="link-bar-link">
                        <p>{linkText}</p>
                    </Link>
                        </span>
            </div>
        </section>


    )
}

export default LinkBar;