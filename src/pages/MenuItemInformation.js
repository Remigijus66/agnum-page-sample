import React from "react";
import ToHome from "../components/ToHome";
import { useParams } from 'react-router-dom';

const MenuItemInformation = () => {
  const { menuNumber } = useParams()
  return (
    <>
      <div>
        You have pressed main menu button. Number {menuNumber}.
        Information on this item should be present here.
      </div>
      <div style = {{color: 'red', fontSize: '24px'}}> {menuNumber}</div>
      <ToHome />
    </>
  );
};

export default MenuItemInformation;