import React from 'react';

const Recomendations = () => {


 const recomendationsLogo = ['https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/accountingExperts.png?raw=true', 'https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/mokivezi.png?raw=true','https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/dzukija.png?raw=true','https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/triumph.png?raw=true','https://github.com/Remigijus66/agnum-page-sample/blob/dev/src/assets/img/diglita.png?raw=true' ]
  return (
      <div className='home-component'>
        <h2>Mus rekomenduoja</h2>
   <div className='logo-list'>
        {recomendationsLogo.map((logo, i)=> {return( <img  style={{width: "100px" }} className='logo' src={logo} alt="logo" />)})}
   </div>
      </div>
 
  );
};
export default Recomendations