import React, { useEffect } from 'react';
import './Portrait.css';
import {Link} from "react-router-dom";

function Portrait({id, color, firstName, socialStatus, amountOfKids}) {

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
        const radiusX = 50;
        const radiusY = 80;
        const startAngle = 0;
        const endAngle = Math.PI * 2;


        // Draw a circle
        if (socialStatus === "Single") {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            // ctx.fillStyle = "blue";
            // ctx.fill();

            ctx.strokeStyle = {color};
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
        }

        // Check if firstName is "Marie" to show the duplicated circle
        if (firstName === "Marie") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.arc(centerX , centerY , radius, startAngle, endAngle);
            ctx.strokeStyle = {color};
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 1 || amountOfKids === 2 || amountOfKids === 3) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, 45, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 2 || amountOfKids === 3) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, -45, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 3) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        if (socialStatus === "together") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX -40, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state

            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX + 40, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }


        if (socialStatus === "divorced") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX -40, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state

            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX + 40, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
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