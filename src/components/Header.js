import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import agnumLogo from "../assets/img/agnum.png"
import hamburger  from "../assets/img/hamburger.png"
import { Menu, MenuItem, Button } from '@mui/material';

const Header = () => {
  const nav = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItems = [{name:'Apie mus', to: '/'}, {name: 'Paslaugos', to: '/servises'}, {name: 'Kainos', to: '/prices'}, {name: 'Apskaitos programos', to: '/programs'}, {name: 'Atstovai', to: '/reps'}, {name: 'Kontaktai', to: '/contacts'} ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItem = (item) => {
    setAnchorEl(null);
    nav(item)
  };

  return (
    <>
{    (window.screen.width <= 1045) &&   <header className='header'  style={{justifyContent: "space-between"}} >
  <div style={{display: 'flex', }}>

<img  style={{marginRight: "30px", width: "150px"}} className='logo' src={agnumLogo} alt="logo" />
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick} 
        >
       <img  style={{width: "50px"}} className='logo' src={hamburger} alt="logo" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => {handleItem(item.to)}}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
        </div>
      <Link className='link brown-button' to="/contact-form">Susisiekite </Link> 
    </header>}
{   !(window.screen.width <= 1045) &&      <header className='header'>
<img  style={{marginRight: "30px", width: "150px"}} className='logo' src={agnumLogo} alt="logo" />
        { menuItems.map((item)=> {return <Link className='link' to={item.to}>{item.name}</Link>})}
        <Link className='link brown-button' to="/contact-form">Susisiekite </Link> 
       </header>}
    </>
     );
};
export default Header