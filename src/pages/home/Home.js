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
  const centerText = 'Apskaitos sprendimai visiems';
const canvasHeader ='Profesionalūs apskaitos sprendimai Jūsų verslui';

  return (
    <>
      {/* <div className='container laptop-background'> */}

        <div className='round-menu'>
        <CircleWithButtons buttons={mainMenu} header={canvasHeader} text={centerText} size={100} color={'green'} />
        </div>
      <div className="box"></div>
      <div className="box1"></div>
      <div className="box2"></div>
      {/* </div> */}
    </>

  );
};

export default Home;