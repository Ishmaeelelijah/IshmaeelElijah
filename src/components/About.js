import React, { } from 'react';
import Fade from 'react-reveal/Fade';
import day from  '../images/elie.jpg'


class About extends React.Component {
    constructor() {
      super();
      this.state = {
        skills: [
          { id: "HTML5_skill",
            content: "HTML5",
            porcentage: "80%",
            value: "80"
           },

          { id: "CSS3_skill",
            content: "CSS3",
            porcentage: "80%",
            value: "80" 
          },

          {
            id: "JavaScript_skill",
            content: "JavaScript",
            porcentage: "60%",
            value: "60"
          },
          
          {
            id: "ReactJS_skill",
            content: "ReactJS",
            porcentage: "60%",
            value: "60"
          },
          {
            id: "Python_skill",
            content: "Python",
            porcentage: "75%",
            value: "75"
          },
          {
            id: "Python MSQL",
            content: "MSQL Python",
            porcentage: "85%",
            value: "85"
          },
          {
            id: "MYSQL-SQL",
            content: "MYSQL-SQL",
            porcentage: "80%",
            value: "80"
          }
        ],
        about_me: [
          {
            id: "first-p-about",
            content:
              "I am a 21 year old programmer based in south africa cape town. I first started my coding journey in the year 2019 while working as a customer advisor and decided to go into coding because I always wondered how the apps I used in my daily life are made so I took it upon myself to try and learn about coding.I was always into technology "
          },
          {
            id: "second-p-about",
            content:
              "I did a short course as a front end developer and learnt HTML5,CSS3 AND JAVASCRIPT then i thought about expanding my knowledge on coding and decided to take up a bootcamp at Life Choice Academy and it just so happens they were offering a course as a full stack developer.At the moment i know more than 5 coding languages which are HTML5,CSS3,JAVASCRIPT REACTJS,REACT,MSQL-SQL,MYSQL-PYTHONand PYTHON and I am able to create apps using API  "
          },
          
        ]
      };
    }
  
    render() {
      return (
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                      <Fade top cascade ><h1 className='title-left'>MY Skills</h1></Fade>
                        {this.state.skills.map(skill => {
                          return (
                            
                            <React.Fragment key={skill.id}>
                              
                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              
                             <Fade top cascade > <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div></Fade>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                 
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                        <Fade top cascade  ><h1 className='title-left'>ABOUT ME</h1> </Fade>
                        </div>
                        <Fade top cascade  >
                    <img src={day} alt='social' className='img2'/> 
                    </Fade>
                        {this.state.about_me.map(content => {
                          return (
                            <Fade top  ><p className="lead" key={content.id}>
                              {content.content}
                            </p>
                            
                            </Fade>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
 
export default About;