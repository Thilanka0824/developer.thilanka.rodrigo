import React, { useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../Hooks/themeContext";
import './HomePage.css'
import NameAnimation from "../Components/NameAnimation";



const HomePage = ({revealContent}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-page ${theme}-theme valign center`}>
      <NameAnimation />
      
      <Card
        className="green lighten-3"
        title="Frontend Developer"
        image="/TRod.png"
        content="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        revealCardTitle={"Hello, I'm Thilanka"}
        revealContent={"yes"}
      />
     
   
    </div>
  );
};

export default HomePage;
