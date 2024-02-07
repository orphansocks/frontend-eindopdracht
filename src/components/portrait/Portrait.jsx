import React, { useEffect } from 'react';
import './Portrait.css';

function Portrait() {

    useEffect(() => {
        // This code will run after the component has been rendered
        const canvas = document.getElementById('portrait');
        const ctx = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50;
        const startAngle = 0;
        const endAngle = Math.PI * 2;


        // Draw the circle
        // Het type relatie gaat de kleur bepalen
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div>
            <canvas id="portrait" width="150" height="150"></canvas>
            {/*DEZE LINK ZIE JE ALLEEN OP DE OVERVIEW PAGINA*/}
            <p>Link to singlerelative id</p>

        </div>
    );
}

export default Portrait;