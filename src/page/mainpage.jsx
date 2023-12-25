import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import myImage from "../static/media/me.jpg"; // Adjust the path based on your project structure
import { Link } from 'react-router-dom';
import Nav from "../components/nav";


const Mainpage = () => {
  return (
    <>
      <div>
        <div className="intro">
          <div className="container2">
            <h2> Hi I'm Salma </h2>
            <h2 className="hh2">Front-end Developer</h2>
            
            <a href="../static/download/salma-edited-cv.pdf" download="salma-edited-cv.pdf"  >
              download resume
            </a>
          </div>
        </div>

        <div name="about " className="about">
          <div className="abouthead">
            <p>About Me</p>
          </div>

          <div className="flex-container">
            <div className="flex-item-left">
              <p className="pp">
                Seeking a position of frontend developer to put 2 years’
                experience in (HTML, CSS, JavaScript, Bootstrap) and 1 year in
                Reactjs into use to prove and develop my skills in this field
                and knowledge in using Photoshop and Figma
              </p>

              <div className="row">
										<div   >
											<h4>Phone</h4>
											<p>01008586358</p>
									</div>
										<div style={{marginLeft:"40px"}}>
											<h4>Email</h4>
											<p>salma.mohamedd242@gmail.com</p>
									</div>
									
								</div>


            </div>

            <div className="flex-item-right" >
              <img src={myImage}  alt=""style={{ width: "125px", height: "150px" }}/>

              <div className="linkss">
                <ul>
                <li> <a href="https://www.linkedin.com/in/salma-mohamed-5726ab1b8/"> <FaLinkedin className="icon" />  </a> </li>
                <li> <a href="https://github.com/salma-mohamed24">  <FaGithub className="icon"/>  </a> </li>
                </ul>
              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
