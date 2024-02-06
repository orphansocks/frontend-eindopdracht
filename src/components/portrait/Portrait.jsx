import React, { useEffect } from 'react';

function Portrait({ color }) {
    useEffect(() => {
        // This code will run after the component has been rendered
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50;
        const startAngle = 0;
        const endAngle = Math.PI * 2;

        // Draw the circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div>
       np
            <canvas id="canvas" width="150" height="150"></canvas>
        </div>
    );
}

export default Portrait;