import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList = ({programs, size, color}) => {

  return (
      <div className='home-component'>
        <h2>Programos</h2>
      
<div className='program-list'>
{programs.map((program, i)=> {return(<ProgramCard key={i} program={program} size={size} color={color}/>)})}

</div>
      </div>
 
  );
};
export default ProgramList