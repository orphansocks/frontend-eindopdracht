import React, { useEffect } from 'react';
import './Portrait.css';
import {Link} from "react-router-dom";

function Portrait({id, color, firstName, socialStatus, amountOfKids, relation}) {



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


        // Check social status for single ellipse
        if (socialStatus === "single") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        if (socialStatus === "together" || socialStatus ==="married") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX -20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state

            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX +20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        if (socialStatus === "divorced") {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX -20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state

            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX +20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 1 || amountOfKids === 2 || amountOfKids === 3 || amountOfKids === 4 ) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusY, radiusX, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 2 || amountOfKids === 3 || amountOfKids === 4) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY +20, radiusY, radiusX, 0,startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 3 || amountOfKids === 4) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY -20, radiusY, radiusX, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 4) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY -40, radiusY, radiusX, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }


        // Determine fill color based on relation
        let fillColor = "#201e1f"
        switch (relation) {
            case "friends":
                fillColor = "#FEC016";
                break;
            case "family":
                fillColor = "#41FA91";
                break;
            case "study":
                fillColor = "#85A090";
                break;
            case "neighbour":
                fillColor = "#ECF3DB";
                break;
            default:
                fillColor = "#FC02FF";
        }

        // Dot for relation
        ctx.save(); // Save the current transformation state
        ctx.beginPath();
        ctx.arc(centerX -55 , centerY +55 , 9, startAngle, endAngle);
        ctx.fillStyle = fillColor;
        ctx.fill();
        // ctx.stroke();
        ctx.closePath();
        ctx.restore(); // Restore the transformation state


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