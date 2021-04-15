import React, {Component} from 'react'
import PyramidAcademy from './images/pyramidAcademy.png'
import PyramidPic from './images/pyramid.png';
import pfp from './images/pfp.png'
import PurpleCircle from './images/purpleCircle.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Print Export Word
      </header>
      <div className="topRow">
      <div className="imageContainer">
      <img src={pfp} alt="alt" className="profilepic"/>
      </div>
      <div className="nameAndTitle">
      <div className="name">
      Tristen Janzen
      </div>
      <div className="jobTitle">
      Fullstack Java Developer
      </div>
      </div>
      <img src={PyramidAcademy} alt="alt" className="pyramidPic"/>
      </div>
      <div className="equivPanel">
        <div className="equivHeader" >
          <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Industry Equivalency
        </div>
        <div className="equivBody">
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">Java</p>
          </div>
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">Python</p>
          </div>
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">C++</p>
          </div>
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">HTML</p>          
            </div>
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">CSS</p>
          </div>
          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">20</div>
            </div>
            <p className="typeOfEquiv">JavaScript</p>          
            </div>
          <p className="equivDescription">
            Equivalency in Months
          </p>
        </div>
      </div>
      <div className="aboutMe">
        <h2>
          About Me
        </h2>
        <p className="aboutMeParagraph">
        I am a full-stack Java software developer with recent experience building web applications. I went to school at the University of South Alabama where I pursued a Bachelor’s degree in Broadcast Journalism and a Associate's degree in Commercial Art from Coastal Alabama Community College. I recently decided to change career paths to enter the technology field because I rediscovered my passion for coding while working in HTML and CSS during a class project diving into commerical art and I wanted to dive deeper in the field. In a few years, my goal is to become a senior developer so that I can mentor others.
<br/><br/>
During my time at Revature, I’ve worked on several projects where I gained experience in both frontend development (including HTML/CSS, JavaScript, and Angular) as well as backend technologies (including Java, SQL, Spring framework, and microservices architecture). I also have experience with DevOps and using Jenkins and deploying to the cloud with Amazon Web Services. I really enjoy the collaborative team environment where I can learn from others, and I have worked hard to improve my interpersonal and communication skills. I look forward to applying all of my skills and prior experience in a position on your team.
</p>
      </div>
      <div className="equivPanel2">
        <div className="equivHeader2" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Education and Certification
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
