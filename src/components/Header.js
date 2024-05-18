import React from 'react';
import { Link } from 'react-router-dom';
import agnumLogo from "../assets/img/agnum.png"
const Header = () => {


  return (
          <header className='header'>
<img  style={{marginRight: "30px", width: "150px"}} className='logo' src={agnumLogo} alt="logo" />
        <Link className='link' to="/">Apie mus</Link>
        <Link className='link' to="/servises">Paslaugos</Link>
        <Link className='link' to="/prices">Kainos </Link> 
        <Link className='link' to="/programs">Apskaitos programos </Link> 
        <Link className='link' to="/reps">Atstovai</Link> 
        <Link className='link' to="/contacts">Kontaktai</Link> 
        <Link className='link brown-button' to="/contact-form">Susisiekite </Link> 
       </header>
     );
};
export default Header