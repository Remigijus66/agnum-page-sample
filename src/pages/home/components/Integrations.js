import React from 'react';
import { useNavigate } from 'react-router-dom';

const Integrations = () => {
  const nav = useNavigate()
  const navigate = () => {
    nav('/integrations-page')
  }
 const integrationsLogo = [ 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/telema.png?raw=true','https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/edisoft.png?raw=true','https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/shopify.png?raw=true', 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/ivesk.png?raw=true', 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/prestashop.png?raw=true']

  return (
      <div className='home-component'>
        <h2>B2B integracijos</h2>
        <p style={{    marginBlockStart: '0px'}}>Kaip pradėti integracinį projektą</p>
   <div className='logo-list'>
        {integrationsLogo.map((logo, i)=> {return( <img  style={{width: "100px" }} className='logo' src={logo} alt="logo" />)})}
   </div>
<div className='integration-info'>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus a sem euismod facilisis. Praesent vitae dui eu quam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget elit molestie justo tempus consectetur sed et sapien. Nullam congue congue nunc. Integer posuere ipsum vel libero tincidunt molestie. Nullam.</p>
<button className='gray-button' onClick={navigate}>Sužinok daugiau</button>
</div>
      </div>
 
  );
};
export default Integrations