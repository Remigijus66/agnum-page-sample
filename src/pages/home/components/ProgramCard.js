import React, { useEffect, useRef } from 'react';
import { drawSquare, drawArrowToLowerRight, } from '../../../helper/utils';
import { useNavigate } from 'react-router-dom';

const ProgramCard = ({ program, size, color }) => {
  const nav = useNavigate()
  const navigate = (progName) => {
    nav(`/program-info/${progName}`)
  }
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawSquare(ctx, color, 0, 0, size / 3)
    drawArrowToLowerRight(ctx, 'white', size / 6, size / 6, size / 8)
  }, [])
  console.log(size, color)
  return (
    <div>
      <canvas style={{ position: 'relative', left: `-${size / 8}px` }} ref={canvasRef} width={size / 3} height={size / 3} />
      <div className='program-card' style={{ marginTop: `-${size / 4}px` }} >
        <div className='card-section'>{program.name}</div>
        <div className='card-section fl2 al-start '>{program.text}</div>
        <div className='card-section'>
          <button className='brown-button' style={{ border: 'none' }} onClick={() => navigate(program.name)}> Sužinok daugiau </button>
        </div>
      </div>

    </div>
  );
};
export default ProgramCard