import React, { useEffect, useState } from "react";
import CircleWithButtons from "./components/CircleWithButtons";
import ProgramList from "./components/ProgramList";
import Integrations from "./components/Integrations";
import Recomendations from "./components/Recomendations";


const Home = () => {

  const mainMenu = [
    { hour: 1, text: 'box text1' },
    { hour: 2, text: 'box  longer text2' },
    { hour: 3, text: 'box text3' },
    { hour: 4, text: 'box longer text4' },
    { hour: 5, text: 'box text5' },
    { hour: 7, text: 'box text7' },
    { hour: 8, text: 'box text8' },
    { hour: 9, text: 'box longer text9' },
    { hour: 10, text: 'box text10' },
    { hour: 11, text: 'box text11' }]
  const centerText = 'Apskaitos sprendimai visiems';
const canvasHeader ='Profesionalūs apskaitos sprendimai Jūsų verslui';

const programs = [{name:'ELIT', text: ' here goes the text for elit program,text for elit program'}, {name:'AGNUM', text: ' here goes the text for agnum program'},{name:'TERMINALINIS AGNUM', text: ' here goes the text for terminalinis agnum program'},{name:'VIRTUALUS AGNUM', text: 'here goes the text for virtualus agnum program'}]
const clr = 'green'
let size = 40
if (window.screen.width >= 1045 ) { 
  size= 100
  } else if (window.screen.width >= 700 && window.screen.width < 1045) { 
 size = 70
  }

  return (
    <>
         <div className='hero-picture'>
        <CircleWithButtons buttons={mainMenu} header={canvasHeader} text={centerText} size={size} color={clr} />
        </div>
    <ProgramList programs={programs} color={clr} size={size}/>
      < Integrations/>
      <Recomendations/>
      </>

  );
};

export default Home;