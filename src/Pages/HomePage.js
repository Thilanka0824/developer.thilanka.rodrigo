import React, { useState, useEffect, useContext, useRef } from "react";
import Card from "../Components/Card";

import ThemeContext from "../Hooks/themeContext";
import { Form } from "react-router-dom";
import MyForm from "../Components/MyForm";

const HomePage = (title, image, content, revealContent) => {
  const { theme } = useContext(ThemeContext);
  const name = "Thilanka Rodrigo";
  console.log(name.length);
  const [animatedName, setAnimatedName] = useState("");
  console.log(animatedName.length);

  const animatedNameRef = useRef(animatedName);

  let timeout;
  // let completed = false;

  const animate = () => {
    if (animatedNameRef.current.length < name.length) {
      timeout = setTimeout(() => {
        const nextChar = name[animatedNameRef.current.length];
        setAnimatedName(animatedName + nextChar);
        animatedNameRef.current = animatedNameRef.current + nextChar;
        // if (animatedName.length === name.length) {
        //   completed = true;
        // } else {
        // animate();
        // }
      }, 80);
    }
  };

  useEffect(() => {
    animate();
    return () => clearTimeout(timeout);
  }, [name, animatedName]);

  return (
    <div className={`home-page ${theme}-theme valign center`}>
      <h2>{animatedName}</h2>
      <img src="../../public/TRod.png" />

      <Card
        className="red lighten-3"
        title="Thilanka Rodrigo"
        image="../../public/logo192.png"
        content="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        revealContent="Here is some more information about this product that is only revealed once clicked on."
      />
      <br />
      <br />
      <MyForm />
    </div>
  );
};

export default HomePage;
