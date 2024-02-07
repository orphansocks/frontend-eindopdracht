import React, { useEffect, useRef } from 'react';

function CanvasWithPortraits({ portraits }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Loop through each circle and draw it on the canvas
        portraits.forEach(circle => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fillStyle = circle.color;
            ctx.fill();
            ctx.closePath();
        });
    }, [portraits]);

    return <canvas ref={ canvasRef } width={800} height={600} />;
}

export default CanvasWithPortraits;