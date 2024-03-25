import React, { useEffect } from 'react';
import './Portrait.css';
import {Link} from "react-router-dom";
import birthdayChecker from "../../helpers/birthdayChecker.js";

function Portrait({id, color, firstName, socialStatus, amountOfKids, relation, dob}) {
    const isBirthday = birthdayChecker(dob);

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
        const radiusX = 60;
        const radiusY = 80;
        const startAngle = 0;
        const endAngle = Math.PI * 2;

        // Determine fill color based on relation
        let fillColor = "#201e1f"
        switch (relation) {
            case "friends":
                fillColor = "#FEC016";
                break;
            case "family":
                fillColor = "#85A090";
                break;
            case "fellow students":
                fillColor = "#B8C2C8";
                break;
            case "neighbours":
                fillColor = "#C6C1B0";
                break;
            default:
                fillColor = "#C6B0B0";
        }

        // Draw the circle for the relation
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 14, startAngle, Math.PI * 2, false);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.closePath();


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
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(centerX -20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.ellipse(centerX +20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

        if (socialStatus === "divorced") {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(centerX -20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.ellipse(centerX +20, centerY, radiusX, radiusY, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

        // ellipse for amountofkids
        if (amountOfKids === 1 ) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusY, radiusX -20, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0;
            ctx.stroke();
            // ctx.fillStyle = "#C6B0B0";
            // ctx.fill();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if (amountOfKids === 2 || amountOfKids === 3 || amountOfKids === 4  ) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX , centerY -10, radiusY, radiusX -20, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state

            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX , centerY +10, radiusY, radiusX -20, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        // ellipse for amountofkids
        if ( amountOfKids >= 3  ) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusY, radiusX -20, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0;
            ctx.stroke();
            // ctx.fillStyle = "#C6B0B0";
            // ctx.fill();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }

        if ( amountOfKids >= 4  ) {
            ctx.save(); // Save the current transformation state
            ctx.beginPath();
            ctx.ellipse(centerX, centerY +20, radiusY, radiusX -20, 0, startAngle, endAngle);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0;
            ctx.stroke();
            // ctx.fillStyle = "#C6B0B0";
            // ctx.fill();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
        }



        // Anti aliasing
        ctx.imageSmoothingEnabled = false;


    }, [id]); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div className="portrait-container">
            <div className="data-container">
            <canvas
                id={id}
                width="150"
                height="150">
            </canvas>
                </div>

            <span className="portrait-name">
            <h4>
                <Link to={`/relatives/${id}`}>{isBirthday ? `${firstName}*` : firstName  }</Link>
            </h4>
            <h5>
                <Link className="portrait-relation" to={`/categories/${relation}`}>{relation}</Link>
            </h5>
            </span>




        </div>
    );
}

export default Portrait;