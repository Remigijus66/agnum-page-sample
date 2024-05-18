import React from 'react';
import agnumLogo from "../assets/img/agnum.png"
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
const Footer = () => {


  return (
      <footer className='footer'>
        <img  style={{margin: "0px 70px", width: "140px"}} className='logo' src={agnumLogo} alt="logo" />
        <button className='gray-button'>Išbandyk nemokamai</button>
        <span className='contacts'>
          <p>Kontaktai:</p>
          <p>tel: 000 000 000, 111 111 111, 222 222 222</p>
<p>e.lp. elekronins.pastas@pastas.lt</p>
        </span>

      </footer>
 
  );
};
export default Footer