import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import './Portrait.css';
import { MapPin } from "@phosphor-icons/react";

function GroupPortrait({id, groupName, groupPlace, groupRelatives, relation }) {

    // const relatives = [groupRelatives]


    // useeffect voor het effect

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
            const randomDistance = Math.random() * radius -12;

            // Calculate dot coordinates within the circle
            const randomX = centerX + randomDistance * Math.cos(randomAngle);
            const randomY = centerY + randomDistance * Math.sin(randomAngle);

            const dotRadius = 8;

            // Determine dot color based on relative's relation
            let fillColor = "#201e1f"
            switch (relative.relation) {
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
                    fillColor = "#e0d7e0";
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

                <p><Link to={`/groups/${id}`}>{groupName}</Link></p>
                {/*// IF GROUPPLACE*/}
                <p><MapPin size={24} weight="light" /> {groupPlace}</p>
            </span>


        </div>
    );

}

export default GroupPortrait;