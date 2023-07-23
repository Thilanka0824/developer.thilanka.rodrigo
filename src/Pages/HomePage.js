import React, { useState, useEffect, useContext, useRef } from "react";
import Card from "../Components/Card";
import ThemeContext from "../Hooks/themeContext";
import { Form } from "react-router-dom";
import MyForm from "../Components/MyForm";
import './HomePage.css'
import NameAnimation from "../Components/NameAnimation";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-page ${theme}-theme valign center`}>
      <NameAnimation />
      
      <Card
        className="red lighten-3"
        title="Hi I'm Thilanka"
        image="/TRod.png"
        content="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        revealContent="Here is some more information about this product that is only revealed once clicked on."
      />
     
    </div>
  );
};

export default HomePage;
