import React from "react";
import Card from "./Card";

const JobCards = ({ current }) => {
  return (<div>

    <Card
      title="Frontend Developer"
      image="devAtWork.jpg"
      content="I am a frontend developer with 4 years of experience in ReactJS, Redux, HTML, CSS, JavaScript, and MaterializeCSS."
      revealCardTitle="JavaScript, ReactJS, Python, Redux, HTML, CSS, AWS, MaterializeCSS"
      revealContent={
        <div>
          <ul>
            <li>Apr 2020 - Present</li>
          </ul>
        </div>
      }
    />
    <Card
      title="IT Support Specialist"
      image="techAtWork.jpg"
      content="I am a frontend developer with 4 years of experience in ReactJS, Redux, HTML, CSS, JavaScript, and MaterializeCSS."
      revealCardTitle="JavaScript, ReactJS, Python, Redux, HTML, CSS, AWS, MaterializeCSS"
      revealContent={
        <div>
          <ul>
            <li>July 2023 - Present</li>
          </ul>
        </div>
      }
    />
  </div>
  );
};

export default JobCards;
