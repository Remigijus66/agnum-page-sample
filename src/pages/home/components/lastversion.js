import React, { useEffect, useRef } from 'react';

const CircleWithButtons = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Calculate the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Define angles for the visible parts of the circle
    const startAngle1 = Math.PI / 3 * 5; // Hour 7
    const endAngle1 = Math.PI / 3; // Hour 11
    const startAngle2 = Math.PI / 3 * 2; // Hour 1
    const endAngle2 = Math.PI / 3 * 4; // Hour 5

    // Draw the circle segments
    const radius = 100;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle1, endAngle1);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle2, endAngle2);
    ctx.stroke();

    // Draw the inner circle with text
    const innerRadius = 40;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightgray';
    ctx.fill();
    ctx.stroke();

    // Add text inside the inner circle
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Message', centerX, centerY);

    // Calculate positions for the buttons
    const hours = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
    const angleStep = Math.PI / 3 * 2; // Angle between each hour (120 degrees)
    const buttonRadius = radius + 20; // Distance of buttons from the circle

    hours.forEach((hour) => {
      const angle = ((hour - 1) % 6) * angleStep; // Calculate the angle for the hour
      const buttonX = centerX + buttonRadius * Math.cos(angle);
      const buttonY = centerY + buttonRadius * Math.sin(angle);

      // Draw the button rectangle
      const buttonWidth = 80;
      const buttonHeight = 40;
      ctx.fillStyle = 'white';
      ctx.fillRect(buttonX - buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.strokeRect(buttonX - buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight);

      // Draw the blue square inside the button
      const squareSize = 20;
      ctx.fillStyle = 'blue';
      ctx.fillRect(buttonX + buttonWidth / 4, buttonY + buttonHeight / 4, squareSize, squareSize);

      // Draw the arrow inside the square
      ctx.beginPath();
      ctx.moveTo(buttonX + buttonWidth / 4, buttonY + buttonHeight / 4);
      ctx.lineTo(buttonX + buttonWidth / 4 + squareSize, buttonY + buttonHeight / 4);
      ctx.lineTo(buttonX + buttonWidth / 4, buttonY + buttonHeight / 4 + squareSize);
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.fill();

      // Button click handler
      canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        if (
          clickX >= buttonX - buttonWidth / 2 &&
          clickX <= buttonX + buttonWidth / 2 &&
          clickY >= buttonY - buttonHeight / 2 &&
          clickY <= buttonY + buttonHeight / 2
        ) {
          console.log(`Button ${hour} clicked!`);
          // Call your function here
        }
      });
    });
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default CircleWithButtons;