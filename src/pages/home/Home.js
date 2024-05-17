import React from "react";
import CircleWithButtons from "./components/CircleWithButtons";


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
  const centerText = 'Apskaitos sprendimai visiems'

  return (
    <div className='container laptop-background'>
      <CircleWithButtons buttons={mainMenu} text={centerText} size={100} color={'green'}/>
    </div>

  );
};

export default Home;