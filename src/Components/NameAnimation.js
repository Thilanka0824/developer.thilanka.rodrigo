import React from 'react'
import { useState, useEffect, useContext, useRef } from "react";
import './NameAnimation.css'

const NameAnimation = () => {
    const firstName = " Thilanka"; //fix this when you have time
    const lastName = "Rodrigo";
    console.log(firstName.length);
    const [animatedName, setAnimatedName] = useState("");
    const [lastAnimatedName, setLastAnimatedName] = useState("");
    console.log(animatedName.length);
  
    const animatedNameRef = useRef(animatedName);
    const lastAnimatedNameRef = useRef(lastAnimatedName);
  
    let timeout;
  
    const animate = () => {
      if (animatedNameRef.current.length < firstName.length) {
        timeout = setTimeout(() => {
          const nextChar = firstName[animatedNameRef.current.length]; // taking the next character in the string and adding it to the animated name
          setAnimatedName(animatedName + nextChar);
          animatedNameRef.current = animatedNameRef.current + nextChar;
        }, 200);
      }
      if (lastAnimatedNameRef.current.length < lastName.length) {
        timeout = setTimeout(() => {
          const lastNextChar = lastName[lastAnimatedNameRef.current.length];
          setLastAnimatedName(lastAnimatedName + lastNextChar);
          lastAnimatedNameRef.current = lastAnimatedNameRef.current + lastNextChar;
        }, 200);
      }
    };
  
    useEffect(() => {
      animate();
      return () => clearTimeout(timeout);
    }, [firstName, lastName, animatedName]);
  return (
    <div className='name-container'>
        <h2 className="first-name">{animatedName}</h2>
      <h2 className="last-name">{lastAnimatedName}</h2>
      <br />
    </div>
  )
}

export default NameAnimation