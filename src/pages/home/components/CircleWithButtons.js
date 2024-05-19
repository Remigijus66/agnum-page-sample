import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { drawSquare, wrapText, calculateTextHeight, drawArrowToLowerRight, drawArrowToLowerLeft } from '../../../helper/utils';

const CircleWithButtons = ({ buttons, header, text, size, color }) => {
  const nav = useNavigate()

  const canvasRef = useRef(null);

  const navigate = (number) => {
    nav(`/menu-item/${number}`)
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const background1 = new Image();
    const background2 = new Image();
    background1.src = 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/lady-with-laptop.png?raw=true';
    background1.onload = () => {
      ctx.drawImage(background1, size * 1.95, size * .20, size * 10.10, size * 6.50);
      // ctx.drawImage(background1, 0, 0, size*14, size*7);// white scr laptop setup
      background2.src = 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/empty-screen-laptop-removebg.png?raw=true';
      background2.onload = () => {
        ctx.drawImage(background2, 0, 0, size * 14, size * 7);
        // ctx.drawImage(background2, 195, 20, 1010, 650); // lady setup
        // ctx.drawImage(background2, size*3.8, size, size*8, size*5.4); // removed bg lady setup



        // Calculate the center of the canvas
        const centerX = canvas.width / 2 - size * 1.5;
        const centerY = canvas.height / 2 + size * 0.7;

        const startAngle1 = Math.PI / 3 * 5;
        const endAngle1 = Math.PI / 3;
        const startAngle2 = Math.PI / 3 * 2;
        const endAngle2 = Math.PI / 3 * 4;

        // Draw the circle segments
        const radius = size;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle1, endAngle1);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle2, endAngle2,);
        ctx.stroke();

        // Draw the inner circle with text
        const innerRadius = radius * 0.8;
        const innerX = centerX;
        const innerY = centerY;
        ctx.beginPath();
        ctx.arc(innerX, innerY, innerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Add text inside the inner circle
        ctx.fillStyle = 'white';
        ctx.font = `${size / 6}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const correction = calculateTextHeight(ctx, text, innerRadius, size / 5)
        wrapText(ctx, text, innerX, innerY - correction / 4, innerRadius, size / 5)


        // Calculate positions for the buttons

        const angleStep = Math.PI / 6; // Angle between each hour
        const buttonRadius = radius + radius * 2 / 3; // Distance of buttons from the circle

        buttons.forEach((button) => {
          const angle = (button.hour - 1) * angleStep - Math.PI / 3; // Calculate the angle for the hour
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
          ctx.lineTo(buttonX, buttonY);
          ctx.stroke();

          // Draw the button
          ctx.fillStyle = 'white';
          ctx.fillRect(buttonX - buttonWidth / 2 + (buttonWidth / 3) * (Math.cos(angle) / Math.abs(Math.cos(angle))), buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
          const buttonCorrectedX = buttonX + (buttonWidth / 3) * (Math.cos(angle) / Math.abs(Math.cos(angle)))
          ctx.strokeRect(buttonCorrectedX - buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight);
          ctx.fillStyle = 'black';
          ctx.font = `${size / 8}px Arial`;
          const correction = calculateTextHeight(ctx, button.text, buttonWidth - buttonHeight, size / 8)
          wrapText(ctx, button.text, (Math.cos(angle) > 0 ? buttonCorrectedX + buttonHeight / 2 : buttonCorrectedX - buttonHeight / 2), correction > size / 8 ? buttonY - correction / 4 : buttonY, buttonWidth - buttonHeight, size / 8)

          drawSquare(ctx, color, (Math.cos(angle) > 0 ? buttonCorrectedX - buttonWidth / 2 : buttonCorrectedX + buttonHeight / 2), buttonY - buttonHeight / 2, buttonHeight)
          Math.cos(angle) > 0 ? drawArrowToLowerRight(ctx, 'white', buttonCorrectedX - buttonHeight, buttonY, buttonHeight / 3) : drawArrowToLowerLeft(ctx, 'white', buttonCorrectedX + buttonHeight, buttonY, buttonHeight / 3)
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;

          // Button click handler
          canvas.addEventListener('click', function (event) {
            const rect = canvas.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
            if (
              clickX >= buttonCorrectedX - buttonWidth / 2 &&
              clickX <= buttonCorrectedX + buttonWidth / 2 &&
              clickY >= buttonY - buttonHeight / 2 &&
              clickY <= buttonY + buttonHeight / 2
            ) {

              navigate(button.hour)
            }
          });
        });


        const headerX = canvas.width / 2 - size * 2.5;
        const headerY = canvas.height / 2 - size * 2.3;
        ctx.fillStyle = 'black';
        ctx.font = `500 ${size / 3}px Times`;
        wrapText(ctx, header, headerX, headerY, size * 4, size / 3)
      };
    };
  }, []);

  return <canvas ref={canvasRef} width={size * 14} height={size * 7} />;
};

export default CircleWithButtons;
