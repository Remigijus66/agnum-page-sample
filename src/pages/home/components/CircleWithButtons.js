import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CircleWithButtons = ({ buttons, text, size, color }) => {
  const nav = useNavigate()

  const canvasRef = useRef(null);

  const navigate = (number) => {
    nav(`/menu-item/${number}`)
  }
  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    let testWidth = 0;

    for (let i = 0; i < words.length; i++) {
      testLine = line + words[i] + ' ';
      testWidth = context.measureText(testLine).width;
      if (testWidth > maxWidth && i > 0) {
        context.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }
  const calculateTextHeight = (context, text, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    let testWidth = 0;
    let height = 0;

    for (let i = 0; i < words.length; i++) {
      testLine = line + words[i] + ' ';
      testWidth = context.measureText(testLine).width;
      if (testWidth > maxWidth && i > 0) {
        height += lineHeight;
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    height += lineHeight;
    return height;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const background = new Image();
    background.src = 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/laptop-with-lady.png?raw=true';
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      // };
      // Additional drawing code can go here
      // Calculate the center of the canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const startAngle1 = Math.PI / 3 * 5;
      const endAngle1 = Math.PI / 3;
      const startAngle2 = Math.PI / 3 * 2;
      const endAngle2 = Math.PI / 3 * 4;

      const drawSquare = (squareColor, squareX, squareY, squareSize) => {
        ctx.fillStyle = squareColor;
        ctx.fillRect(squareX, squareY, squareSize, squareSize);
      }
      const drawArrowToLowerRight = (arrowColor, arrowCenterX, arrowCenterY, arrowSize) => {
        ctx.strokeStyle = arrowColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(arrowCenterX - arrowSize / 2, arrowCenterY - arrowSize / 2); // Start point of the arrow
        ctx.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 2); // Main line of the arrow
        ctx.moveTo(arrowCenterX + arrowSize / 4, arrowCenterY + arrowSize / 2); // Left side of arrowhead
        ctx.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 2); // Connect to main line
        ctx.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 4); // Right side of arrowhead
        ctx.stroke();
      }
      const drawArrowToLowerLeft = (arrowColor, arrowCenterX, arrowCenterY, arrowSize) => {
        ctx.strokeStyle = arrowColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(arrowCenterX + arrowSize / 2, arrowCenterY - arrowSize / 2); // Start point of the arrow
        ctx.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 2); // Main line of the arrow
        ctx.moveTo(arrowCenterX - arrowSize / 4, arrowCenterY + arrowSize / 2); // Right side of arrowhead
        ctx.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 2); // Connect to main line
        ctx.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 4); // Left side of arrowhead
        ctx.stroke();
      }

      // Draw the circle segments
      const radius = size;
      ctx.beginPath();
      // ctx.arc(centerX, centerY, radius, endAngle1, startAngle2);
      ctx.arc(centerX, centerY, radius, startAngle1, endAngle1);
      // ctx.arc(centerX, centerY, radius, endAngle2, startAngle1,);

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
      // ctx.fillText('Apskaitos sprendimai visiems', innerX, innerY);
      const correction = calculateTextHeight(ctx, text, innerRadius, size / 5)
      wrapText(ctx, text, innerX, innerY - correction / 4, innerRadius, size / 5)


      // Calculate positions for the buttons
      // console.log(buttons)
      // const hours = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
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

        drawSquare(color, (Math.cos(angle) > 0 ? buttonCorrectedX - buttonWidth / 2 : buttonCorrectedX + buttonHeight / 2), buttonY - buttonHeight / 2, buttonHeight)
        Math.cos(angle) > 0 ? drawArrowToLowerRight('white', buttonCorrectedX - buttonHeight, buttonY, buttonHeight / 3) : drawArrowToLowerLeft('white', buttonCorrectedX + buttonHeight, buttonY, buttonHeight / 3)
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        // Button click handler
        canvas.addEventListener('click', function (event) {
          const rect = canvas.getBoundingClientRect();
          const clickX = event.clientX - rect.left;
          const clickY = event.clientY - rect.top;
          if (
            clickX >= buttonX - buttonWidth / 2 &&
            clickX <= buttonX + buttonWidth / 2 &&
            clickY >= buttonY - buttonHeight / 2 &&
            clickY <= buttonY + buttonHeight / 2
          ) {
            // console.log(`Button ${button.hour} clicked!`);
            navigate(button.hour)
          }
        });

      });
      //here 
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={800} />;
};

export default CircleWithButtons;
