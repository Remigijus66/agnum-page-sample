
export const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
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

export   const calculateTextHeight = (context, text, maxWidth, lineHeight) => {
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

export const drawSquare = ( context, squareColor, squareX, squareY, squareSize) => {
  context.fillStyle = squareColor;
  context.fillRect(squareX, squareY, squareSize, squareSize);
}

export const drawArrowToLowerRight = (context, arrowColor, arrowCenterX, arrowCenterY, arrowSize) => {
  context.strokeStyle = arrowColor;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(arrowCenterX - arrowSize / 2, arrowCenterY - arrowSize / 2); // Start point of the arrow
  context.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 2); // Main line of the arrow
  context.moveTo(arrowCenterX + arrowSize / 4, arrowCenterY + arrowSize / 2); // Left side of arrowhead
  context.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 2); // Connect to main line
  context.lineTo(arrowCenterX + arrowSize / 2, arrowCenterY + arrowSize / 4); // Right side of arrowhead
  context.stroke();
}
export const drawArrowToLowerLeft = (context, arrowColor, arrowCenterX, arrowCenterY, arrowSize) => {
  context.strokeStyle = arrowColor;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(arrowCenterX + arrowSize / 2, arrowCenterY - arrowSize / 2); // Start point of the arrow
  context.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 2); // Main line of the arrow
  context.moveTo(arrowCenterX - arrowSize / 4, arrowCenterY + arrowSize / 2); // Right side of arrowhead
  context.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 2); // Connect to main line
  context.lineTo(arrowCenterX - arrowSize / 2, arrowCenterY + arrowSize / 4); // Left side of arrowhead
  context.stroke();
}
