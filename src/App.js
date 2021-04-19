import React, {Component} from 'react'
import PyramidAcademy from './images/pyramidAcademy.png'
import PyramidPic from './images/pyramid.png';
import pfp from './images/pfp.png'
import PurpleCircle from './images/purpleCircle.png'
import OrangeCircle from './images/orangeCircle.png'
import Wsu from './images/WSU.png'
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
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
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
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
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
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
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
        I recently graduated from Wichita State University this past December with a bachelor in Computer Science and a minor in Math. After graduating, I joined in Pyramid Academy's training program to help prepare me for my career, and now I am looking for a company at which I can continue to learn and grow as a software engineer.<br/><br/>
        My three most important strengths are my drive to learn and grow, my work ethic, and my time management. These strengths help me to become a better developer, offer efficient work for my employer, and set accurate goals and stick to strict schedules that I can make for myself. These strengths allow me to adapt to and effectively use technologies to complete work on time for my employer. My aspirations for the future are to continue to learn and grow as a software engineer while effectively putting the skills I have developed to use in order to do good work for my employer. So far, with these strengths, I have completed a bachelor’s degree, and more recently did a training program with Pyramid Academy, where I learned multiple technologies and efficiently developed projects</p>
      </div>
      <div className="equivPanel2">
        <div className="equivHeader2" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Education and Certification
      </div>
      <div className="equivBody2">
      <div className="WichitaState">
        <div className="WichitaStateImage">
          <img src={Wsu} alt = "alt" className="Wsu"/>
        </div>
        <p className="bach">
        Bachelor's Degree - Computer Science Minor in Mathematics
        </p>
        <p className="bachinfo">
        Wichita State University - December 2020
        </p>
      </div>
    </div>
    </div>
    <div className="equivPanel3">
        <div className="equivHeader3" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Skill Matrix
      </div>
      <div className="equivBody3">
      
    </div>
    </div>
    <div className="equivPanel4">
        <div className="equivHeader4" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Projects
      </div>
      <div className="equivBody4">
      
    </div>
    </div>
    <div className="equivPanel5">
        <div className="equivHeader5" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Other Experiences
      </div>
      <div className="equivBody5">
      
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
