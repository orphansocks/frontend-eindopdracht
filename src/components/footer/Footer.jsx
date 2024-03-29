import './Footer.css';
import React from "react";

/* &COPY IS HET COPYRIGHTS SYMBOOL */


function Footer() {

    return (

        <footer className="outer-content-container sticky-footer">
            <div className="footer-quote">
                <h4>Relative only becomes meaningful in a certain context</h4>
            </div>

            <div className="footer-copyright">
                <p>relatives &copy; <a href="mailto:youremail@example.com?subject=Hi!">Eva van Dongen</a> - 2024 - eindopdracht Full Stack Development Bootcamp @ <a href="https://www.novi.nl/full-stack-developer/" target="_blank">NOVI Hogeschool</a></p>


            </div>

        </footer>

    );

}

export default Footer;