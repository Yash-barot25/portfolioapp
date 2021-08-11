import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PyramidAcademy from './images/pyramidAcademy.png';
import PyramidPic from './images/pyramid.png';
import pfp from './images/MyImage.jpg';
import PurpleCircle from './images/purpleCircle.png';
import OrangeCircle from './images/orangeCircle.png';
import Wsu from './images/WSU.png';
import ReactToPrint from "react-to-print";
import Printer from './images/printer.png';
import Word from './images/word.png';
import file from './images/profile.docx';
import './App.css';

class App extends Component {
  render(){
    const frontEndOptions = {
      chart: {
        height:350,
        width:350,
        type: 'pie'
      },
      credits:{
        enabled:false
      },
      legend:{
        align:'bottom',
        layout:'vertical',
        x:85
      },
      title:{
        text: 'Front-End Tech'
      },
      plotOptions:{
        pie:{
          shadow: false
        }
      },
      tooltip:{
        formatter:function(){
          return '<b>'+this.point.name +'</b>: '+ this.y;
        }
      },
      series: [
        {
          name:'Technologies',
          data: [["HTML (12 Months)",12],["CSS (12 Months)",12],["JavaScript (4 Months)",4],["Bootstrap (2 Months)",2]],
          size: '45%',
          innerSize: '50%',
          showInLegend:true,
          dataLabels:{enabled:false}
        }
      ]
    };
    const backEndOptions = {
      chart: {
        height:350,
        width:350,
        type: 'pie'
      },
      credits:{
        enabled:false
      },
      legend:{
        align:'bottom',
        layout:'vertical',
        x:85
      },
      title:{
        text: 'Back-End Tech'
      },
      plotOptions:{
        pie:{
          shadow: false
        }
      },
      tooltip:{
        formatter:function(){
          return '<b>'+this.point.name +'</b>: '+ this.y;
        }
      },
      series: [
        {
          name:'Technologies',
          data: [["Java (4 Months)",4],["SpringBoot (3 Months)",3],["Python (12 Months)",12],["C++ (24 Months)",24]],
          size: '45%',
          innerSize: '50%',
          showInLegend:true,
          dataLabels:{enabled:false}
        }
      ]
    };
    // const devOpsOptions = {
    //   chart: {
    //     height:350,
    //     width:350,
    //     type: 'pie'
    //   },
    //   credits:{
    //     enabled:false
    //   },
    //   legend:{
    //     align:'bottom',
    //     layout:'vertical',
    //     x:85
    //   },
    //   title:{
    //     text: 'DevOps'
    //   },
    //   plotOptions:{
    //     pie:{
    //       shadow: false
    //     }
    //   },
    //   tooltip:{
    //     formatter:function(){
    //       return '<b>'+this.point.name +'</b>: '+ this.y;
    //     }
    //   },
    //   series: [
    //     {
    //       name:'Technologies',
    //       data: [["GitKraken (4 Months)",4],["GitLab (2 Months)",2],["GitHub (20 Months)",20],["SVN (2 Months",2]],
    //       size: '45%',
    //       innerSize: '50%',
    //       showInLegend:true,
    //       dataLabels:{enabled:false}
    //     }
    //   ]
    // };
    const databaseLayerOptions = {
      chart: {
        height:350,
        width:350,
        type: 'pie'
      },
      credits:{
        enabled:false
      },
      legend:{
        align:'bottom',
        layout:'vertical',
        x:100
      },
      title:{
        text: 'Database'
      },
      plotOptions:{
        pie:{
          shadow: false
        }
      },
      tooltip:{
        formatter:function(){
          return '<b>'+this.point.name +'</b>: '+ this.y;
        }
      },
      series: [
        {
          name:'Technologies',
          data: [["SQL (6 Months)",6],["MySQL (3 Months)",3],["Hibernate (3 Months)",3]],
          size: '45%',
          innerSize: '50%',
          showInLegend:true,
          dataLabels:{enabled:false}
        }
      ]
    };
    const devToolsOptions = {
      chart: {
        height:350,
        width:350,
        type: 'pie'
      },
      credits:{
        enabled:false
      },
      legend:{
        align:'bottom',
        layout:'vertical',
        x:85
      },
      title:{
        text: 'Developer Tools'
      },
      plotOptions:{
        pie:{
          shadow: false
        }
      },
      tooltip:{
        formatter:function(){
          return '<b>'+this.point.name +'</b>: '+ this.y;
        }
      },
      series: [
        {
          name:'Technologies',
          data: [["IntelliJ (4 Months)",4],["PyCharm (6 Months)",6],["Visual Studio Code (18 Months)",18],["Dev C++ (18 Months)",18]],
          size: '45%',
          innerSize: '50%',
          showInLegend:true,
          dataLabels:{enabled:false}
        }
      ]
    };
  return (
    <div className="App" ref={(el) => (this.componentRef = el)}>
      <div className="container">
        <header className="App-header">
          <ReactToPrint
              trigger={() => <button style={{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",marginRight:45}}><img src={Printer} alt="alt" className="Printer"/><div style={{fontSize:16,color:"#1DBEFF"}}>Print</div></button>}
              content={() => this.componentRef}
            />
            <a style={{textDecoration:"none"}} download='profile.docx' href={file}><img src={Word} alt="alt" className="Word"/><div style={{fontSize:16,color:"#1DBEFF",justifyContent:"end",alignSelf: "flex-end",width:70,height:"fit-content",marginLeft:90}}>Export Word</div></a>
        </header>
        <div className="topRow">
      <div className="imageContainer">
      <img src={pfp} alt="alt" className="profilepic"/>
      </div>
      <div className="nameAndTitle">
      <div className="name">
      Yash Barot
      </div>
      <div className="jobTitle">
      Java, DevOps, Big-Data trainer
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
              <div className="numberEquiv">24</div>
            </div>
            <p className="typeOfEquiv">DevOps</p>
          </div>


          <div className="circleContainer">
            <div className="circle">
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">12</div>
            </div>
            <p className="typeOfEquiv">Python</p>
          </div>


          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">4</div>
            </div>
            <p className="typeOfEquiv">Java</p>
          </div>


          <div className="circleContainer">
            <div className="circle">
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">4</div>
            </div>
            <p className="typeOfEquiv">JavaScript</p>          
            </div>


          <div className="circleContainer">
            <div className="circle">
              <img src={PurpleCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">2</div>
            </div>
            <p className="typeOfEquiv">HTML</p>          
            </div>


          <div className="circleContainer">
            <div className="circle">
              <img src={OrangeCircle} alt="alt" className="circleImage"/>
              <div className="numberEquiv">2</div>
            </div>
            <p className="typeOfEquiv">CSS</p>
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
        <div style={{width: 350, height: 350}}>
      <HighchartsReact highcharts={Highcharts} options={frontEndOptions}/>
      </div>
      
      <div style={{width: 350, height: 350}}>
      <HighchartsReact highcharts={Highcharts} options={backEndOptions}/>
      </div>

      {/*<div style={{width: 350, height: 350}}>*/}
      {/*<HighchartsReact highcharts={Highcharts} options={devOpsOptions}/>*/}
      {/*</div>*/}

      <div style={{width: 350, height: 350}}>
      <HighchartsReact highcharts={Highcharts} options={databaseLayerOptions}/>
      </div>

      <div style={{width: 350, height: 350}}>
      <HighchartsReact highcharts={Highcharts} options={devToolsOptions}/>
      </div>
      
    </div>
    </div>
        <div className="equivPanel4">
        <div className="equivHeader4" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Projects
      </div>
      <div className="equivBody4">
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        Swim Glove Force Tracker Software Implementation
        </h4>
        <p>
          Worked on a team for my Senior Design Project as the Software Lead to develop a swim glove that tracked
           the force that was applied to it, and provided instant feedback as to whether or not the correct force was being applied.
           After the swim session, the force was then displayed to the end-user on an interactive graph.

        </p>
        <h5 style={{marginBottom:10,fontSize:24,letterSpacing:1,fontWeight:400,marginTop:9}}>
          Roles / Responsibilities
        </h5>
        <p>• Designed and implemented a program to track and store force applied to a swim glove that my team and I created. 

<br/>• Led our software team, providing weekly goals, and allocating tasks to group members. 
<br/>• Collaborated with our hardware team to properly implement software that met 
requirements and worked with the developed hardware.</p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
          Arduino IDE with C based language, BlueTooth, Python, PyCharm, and SD cards.
          </p>
        <hr></hr>
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        Stock Picking Software
      </h4>
      <p>Worked under Dr. Rajiv Bagai of Wichita State University to develop a program to pick out 
        good long-term stocks to invest in based off of an algorithm that involves double sorting by common, 
        researched finance metrics of the company.
      </p>
      <h5 style={{marginBottom:10,fontSize:24,letterSpacing:1,fontWeight:400,marginTop:9}}>
        Roles / Responsibilities
      </h5>
      <p>• Researched finance surrounding stocks and learned formulas for necessary metrics and how to calculate them given the metrics avaliable from the Finnhub API.
      <br/>  • Created a program to fetch, process, and store the latest stock data from Finnhub’s API. 
<br/>• Processed the data and chose the best stocks based on the algorithms I researched and implemented.</p>
            <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
            Environment / Technologies
            </h4>
<p>
  Python, Finnhub's API, and PyCharm.
</p>
    </div>
    </div>
        
    <div className="equivPanel6">
        <div className="equivHeader6" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          GitHub Projects
      </div>
      <div className="equivBody6">
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        <a href="https://github.com/Tristen-Janzen/Flashcards">Flashcards</a>
        </h4>
        <p>
        This is a fullstack flashcards application that uses Java, Springboot, Hibernate, MySQL, React, and the AntDesign React library. This app allows for users to create an account with a username and password, add study cards to their account, then study or manage said flashcards.

        </p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
                Java, Springboot, Hibernate, MySQL, React, CSS, and the AntDesign React library.
          </p>
        <hr></hr>
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        <a href="https://github.com/Tristen-Janzen/Retail">Retail</a>
        </h4>
        <p>
        A full stack retail inventory app using Java, Spring Boot, Hibernate, with a React front-end.
        </p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
                Java, Spring Boot, Hibernate, React, and CSS.
          </p>
        <hr></hr>
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        <a href="https://github.com/Tristen-Janzen/profile">Profile</a>
        </h4>
        <p>
        A simple profile page, built using React. This is what you are viewing!
        </p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
                JavaScript, React, and CSS.
          </p>
        <hr></hr>
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        <a href="https://github.com/Tristen-Janzen/Sandbox">Sandbox</a>
        </h4>
        <p>
        This is a for fun React project that I use for testing things in React.
        </p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
                React, JavaScript, and CSS.
          </p>
        <hr></hr>
        <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        <a href="https://github.com/Tristen-Janzen/Checkers">Checkers</a>
        </h4>
        <p>
        This is a pure Java console app that is a 2 player game of checkers.
        </p>
                <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
                    Environment / Technologies
                </h4>
                <p>
                Java.
          </p>
          <h5 style={{marginBottom:10,fontSize:24,letterSpacing:1,fontWeight:400,marginTop:9}}>
          
        </h5>
    </div>
    </div>
        
        <div className="equivPanel5">
        <div className="equivHeader5" >
        <img src={PyramidPic} alt="alt" className="keyboardPic"/>
          Other Experiences
      </div>
      <div className="equivBody5">
      <h4 style={{fontSize: 24,fontWeight: 400,marginBottom: 5,marginTop:9}}>
        Sam's Club
      </h4>
      <h5 style={{marginBottom:10,fontSize:20,color: '#fac252',fontWeight:400,marginTop:9}}>
        Rotisserie Associate
      </h5>
      <h4 style={{marginBottom:10,fontSize:18,fontWeight:600,marginTop:9}}>
        April 2017 - February 2021
      </h4>
      <hr style={{borderWidth:5,borderColor: '#fac252'}}></hr>
    </div>
    </div>
      </div>
    </div>
  );
}
}

export default App;
