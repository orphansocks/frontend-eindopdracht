import React, { useEffect } from 'react';
import './Portrait.css';
import {Link} from "react-router-dom";

function Portrait({id, color, firstName}) {

    // useeffect voor wat er gebeurd

    useEffect(() => {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext('2d');
        const scaleFactor = window.devicePixelRatio;

        canvas.width = 240 * scaleFactor;
        canvas.height = 240 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);


        const centerX = canvas.width / 2 / scaleFactor;
        const centerY = canvas.height / 2 / scaleFactor;
        const radius = 80;
        const radiusX = 40;
        const radiusY = 80;
        const startAngle = 0;
        const endAngle = Math.PI * 2;


        // Draw the circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        // ctx.fillStyle = "blue";
        // ctx.fill();

        // Draw the outline
        ctx.strokeStyle = {color}; // Outline color
        ctx.lineWidth = 1; // Outline thickness
        ctx.stroke();
        ctx.closePath();

        // Check if firstName is "Marie" to show the duplicated circle
        if (firstName === "Marie") {
            // Duplicate the circle and move it slightly
            ctx.beginPath();
            ctx.arc(centerX + 16, centerY + 0, radius, startAngle, endAngle); // Modify
            // coordinates slightly
            ctx.strokeStyle = color; // Outline color
            ctx.lineWidth = 1; // Outline thickness
            ctx.stroke();
            ctx.closePath();
        }

        // Check if firstName is "Marie" to show the ellipse
        if (firstName === "Eva") {

            ctx.beginPath();
            ctx.ellipse(centerX + 40, centerY + 0, radiusX, radiusY, 0, 0, 2 * Math.PI);

            // Modify
            // coordinates slightly
            ctx.strokeStyle = color; // Outline color
            ctx.lineWidth = 1; // Outline thickness
            ctx.stroke();
            ctx.closePath();
        }






        // Anti aliasing
        ctx.imageSmoothingEnabled = false;



    }, [id]); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div className="portrait-container">
            <canvas
                id={id}
                width="150"
                height="150">

            </canvas>

            {/*DEZE LINK ZIE JE ALLEEN OP DE OVERVIEW PAGINA*/}
            <p className="portrait-name">
                <Link to={`/relatives/${id}`}>{firstName}</Link>
            </p>



        </div>
    );
}

export default Portrait;