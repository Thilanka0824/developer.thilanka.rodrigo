import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import ThemeContext from '../Hooks/themeContext';

const HomePage = (title, image, content, revealContent) => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`home-page ${theme}-theme`}>
        <h2>Thilanka Rodrigo</h2>

        <Card className="red lighten-3"
        title="Thilanka Rodrigo"
        image="https://materializecss.com/images/sample-1.jpg"
        content="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        revealContent="Here is some more information about this product that is only revealed once clicked on."
        />
        
    </div>
  )
}

export default HomePage