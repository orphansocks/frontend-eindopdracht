import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import './Portrait.css';

function GroupPortrait({id, groupName, groupPlace, groupRelatives, relation }) {

    // const relatives = [groupRelatives]


    // useeffect voor het effect

    useEffect(() => {

        const canvas = document.getElementById(id);
        const ctx = canvas.getContext('2d');
        const scaleFactor = window.devicePixelRatio;

        canvas.width = 220 * scaleFactor;
        canvas.height = 220 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);

        const centerX = canvas.width / 2 / scaleFactor;
        const centerY = canvas.height / 2 / scaleFactor;
        const radius = 80;
        const startAngle = 0;
        const endAngle = Math.PI * 2;

        // Draw the circle for the group if it exists
        if (groupName ) {
            ctx.save();// Save the current transformation state
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            ctx.restore(); // Restore the transformation state
    }

        // Dot for relatives within the circle limits
        groupRelatives.forEach((relative) => {
            const randomAngle = Math.random() * Math.PI * 2;
            const randomDistance = Math.random() * radius -18;

            // Calculate dot coordinates within the circle
            const randomX = centerX + randomDistance * Math.cos(randomAngle);
            const randomY = centerY + randomDistance * Math.sin(randomAngle);

            const dotRadius = 12;

            // Determine dot color based on relative's relation
            let fillColor = "#201e1f"
            switch (relative.relation) {
                case "friends":
                    fillColor = "#FEC016";
                    break;
                case "family":
                    fillColor = "#85A090";
                    break;
                case "study":
                    fillColor = "#B8C2C8";
                    break;
                case "neighbour":
                    fillColor = "#C6C1B0";
                    break;
                default:
                    fillColor = "#C6B0B0";
            }

            // draw dots for the relatives in the array
            ctx.beginPath();
            ctx.arc(randomX, randomY, dotRadius, startAngle, endAngle);
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.closePath();
        });

        // Anti aliasing
        ctx.imageSmoothingEnabled = false;

    }, [id, groupName, groupRelatives]); // Empty dependency array ensures useEffect runs only once
// after initial render

    return (
        <div className="portrait-container">
            <canvas
                id={id}
                width="150"
                height="150">
            </canvas>

            {/*DEZE LINK ZIE JE ALLEEN OP DE OVERVIEW PAGINA*/}
            <span className="portrait-name">

                <h4><Link to={`/groups/${id}`}>{groupName}</Link></h4>
                {/*// IF GROUPPLACE*/}
                <h5>{groupPlace}</h5>
            </span>


        </div>
    );

}

export default GroupPortrait;