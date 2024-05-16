import React, { useEffect, useRef } from 'react';

const CircleWithButtons = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Calculate the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const startAngle1 = Math.PI / 3 * 5; // Hour 7
    const endAngle1 = Math.PI / 3; // Hour 11
    const startAngle2 = Math.PI / 3 * 2; // Hour 1
    const endAngle2 = Math.PI / 3 * 4; // Hour 5

    // Draw the circle segments
    const radius = 100;
    ctx.beginPath();
    // ctx.arc(centerX, centerY, radius, endAngle1, startAngle2);
    ctx.arc(centerX, centerY, radius, startAngle1, endAngle1);
    // ctx.arc(centerX, centerY, radius, endAngle2, startAngle1,);

    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle2, endAngle2,);
    ctx.stroke();

    // Draw the inner circle with text
    const innerRadius = 40;
    const innerX = centerX;
    const innerY = centerY;
    ctx.beginPath();
    ctx.arc(innerX, innerY, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightgray';
    ctx.fill();
    ctx.stroke();

    // Add text inside the inner circle
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Message', innerX, innerY);


    // Calculate positions for the buttons
    const hours = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
    const angleStep = Math.PI / 6; // Angle between each hour
    const buttonRadius = radius + radius * 2 / 3; // Distance of buttons from the circle

    hours.forEach((hour) => {
      const angle = (hour - 1) * angleStep - Math.PI / 3; // Calculate the angle for the hour
      // Calculate the point on the circle where the line should start
      const buttonX = centerX + buttonRadius * Math.cos(angle);
      const buttonY = centerY + buttonRadius * Math.sin(angle);
      const lineStartX = centerX + radius * Math.cos(angle);
      const lineStartY = centerY + radius * Math.sin(angle);
      const buttonWidth = radius;
      const buttonHeight = radius / 3;

      // Draw line from circle to button
      ctx.beginPath();
      ctx.moveTo(lineStartX, lineStartY);
      // ctx.lineTo(buttonX + buttonWidth * Math.cos(angle) /2, buttonY + buttonWidth * Math.sin(angle) /2);
      ctx.lineTo(buttonX , buttonY);
      ctx.stroke();


      // Draw the button
      ctx.fillStyle = 'white';
      ctx.fillRect(buttonX - buttonWidth / 2 + (buttonWidth / 3) * (Math.cos(angle) / Math.abs(Math.cos(angle))), buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
      // ctx.strokeRect(buttonX - (Math.cos(angle) > 0 ? -1 / Math.cos(angle) : -1 / Math.cos(angle)) * buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
      ctx.strokeRect(buttonX - buttonWidth / 2 + (buttonWidth / 3) * (Math.cos(angle) / Math.abs(Math.cos(angle))), buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
      ctx.fillStyle = 'black';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Number(Math.sin(angle)).toFixed(1)} , ${Number(Math.cos(angle)).toFixed(1)}, ${hour}`, buttonX, buttonY);
      // ctx.strokeStyle = 'black';
      // ctx.lineWidth = 2;
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

  return <canvas ref={canvasRef} width={600} height={600} />;
};

export default CircleWithButtons;
