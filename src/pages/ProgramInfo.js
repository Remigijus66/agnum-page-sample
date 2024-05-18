import React from "react";
import ToHome from "../components/ToHome";
import { useParams } from 'react-router-dom';

const ProgramInfo = () => {
  const { programName } = useParams()
  return (
    <>
      <div>
        This is page with detailed information about program  {programName}.
        
      </div>
      <div style = {{color: 'red', fontSize: '24px'}}> {programName}</div>
      <ToHome />
    </>
  );
};

export default ProgramInfo;