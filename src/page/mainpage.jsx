/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import myImage from "../static/media/me.jpg";
import adminvedio from "../static/portfolio/admindashboard/admin-dashboard.mp4";

import grad1 from "../static/portfolio/grad/home.jpg";
import grad2 from "../static/portfolio/grad/violation-rules.png";
import grad3 from "../static/portfolio/grad/signup.jpg";
import grad4 from "../static/portfolio/grad/verification-code.png";
import grad5 from "../static/portfolio/grad/profile.png";
import grad6 from "../static/portfolio/grad/change-pass.png";
import grad7 from "../static/portfolio/grad/login.jpg";
import grad8 from "../static/portfolio/grad/forgetpass.png";
import grad9 from "../static/portfolio/grad/admin.jpg";
import grad10 from "../static/portfolio/grad/detection.png";

import lib1 from "../static/portfolio/library/home.png";
import lib2 from "../static/portfolio/library/register.png";
import lib3 from "../static/portfolio/library/login.png";
import lib4 from "../static/portfolio/library/category.png";
import lib5 from "../static/portfolio/library/user.png";
import lib6 from "../static/portfolio/library/admin.png";

import graph1 from "../static/portfolio/graphic/task 1.jpg";
import graph2 from "../static/portfolio/graphic/task 2.jpg";
import graph3 from "../static/portfolio/graphic/task 3.jpg";
import graph4 from "../static/portfolio/graphic/task 4.jpg";
import graph5 from "../static/portfolio/graphic/task 5.jpg";
import graph6 from "../static/portfolio/graphic/task 6.jpg";
import graph7 from "../static/portfolio/graphic/task 7.jpg";
import graph8 from "../static/portfolio/graphic/task 8.jpg";
import graph9 from "../static/portfolio/graphic/task 9.jpg";

const Mainpage = () => {
  return (
    <>
      <div>
        {/* Intro section */}

        <div className="intro">
          <div className="container2">
            <p> Salma Mohamed</p>
            <p className="hh2">Front-end Developer</p>

            <a
              href="https://drive.google.com/file/d/1x3Me9wyQKpzXc8lCJ8U38TfjAsXB_oxV/view?usp=drive_link"
              target="_blank"
            >
              download resume
            </a>
          </div>
        </div>

        {/* about section */}

        <div name="about" className="about">
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

              <div className="row1">
                <div>
                  <p style={{ fontWeight: "bold" }}>Phone</p>
                  <p>01008586358</p>
                </div>
                <div style={{ marginLeft: "40px" }}>
                  <p style={{ fontWeight: "bold" }}>Email</p>
                  <p>salma.mohamedd242@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex-item-right">
              <img
                src={myImage}
                alt=""
                style={{ width: "125px", height: "150px" }}
              />

              <div className="linkss">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/salma-mohamed-5726ab1b8/"
                      target="_blank"
                    >
                      <FaLinkedin className="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/salma-mohamed24"
                      target="_blank"
                    >
                      <FaGithub className="icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div name="skills" className="skills">
          <div className="skillshead">
            <p>Skills</p>
          </div>

          <div className="flex-container">
            <div className="proggress-item-left">
              <p>ADOBE PHOTOSHOP</p>
              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "90%" }}></div>
                </div>
                <span> 90%</span>
              </div>

              <p>ADOBE ILLUSTRATOR</p>

              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "80%" }}></div>
                </div>
                <span> 80%</span>
              </div>

              <p>FIGMA</p>
              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "80%" }}></div>
                </div>
                <span> 80%</span>
              </div>

              <p>UI/UX</p>
              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "80%" }}></div>
                </div>
                <span> 80%</span>
              </div>

              <p>GIT TOOL</p>
              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "90%" }}></div>
                </div>
                <span> 90%</span>
              </div>
            </div>

            <div className="proggress-item-right">
              <p> REACT.JS</p>
              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "80%" }}></div>
                </div>
                <span> 80%</span>
              </div>

              <p>HTML 5</p>

              <div className="row2">
                <div className=" progress-moved">
                  <div
                    className="progress-bar2"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span> 100%</span>
              </div>

              <p>CSS </p>
              <div className="row2">
                <div className=" progress-moved">
                  <div
                    className="progress-bar2"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span> 100% </span>
              </div>

              <p>JAVA SCRIPT</p>

              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "80%" }}></div>
                </div>
                <span> 80%</span>
              </div>

              <p> BOOTSTRAB</p>

              <div className="row2">
                <div className=" progress-moved">
                  <div className="progress-bar2" style={{ width: "90%" }}></div>
                </div>
                <span> 90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* project section */}
        <div className="projectshead">
          <p>Projects</p>
        </div>

        <div
          name="projects "
          className="projects"
          style={{ backgroundColor: "#d7e5de61" }}
        >
          <section className="container3">
            <div className="vedio1">
              <p style={{ paddingBottom: "10px" }}>Admin Dash-board</p>

              <div
                className="vedio2"
                style={{ aspectRatio: "25 / 14", paddingRight: "60px" }}
              >
                <video controls>
                  <source src={adminvedio} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          <section style={{ backgroundColor: "#d7e5de61", marginTop: "50px" }}>
            <p id="library" style={{ marginLeft: "20px", paddingTop: "5px" }}>
              Library - Figma UI Project
            </p>

            <div style={{ marginLeft: "20px", paddingTop: "15px" }}>
              <a href="#img2" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib2} className="imggroup" alt="" />{" "}
              </a>
              <div id="img2" className="bigimage">
                <p className="content">Register</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib2} alt="" className="imagecontent" />
              </div>

              <a href="#img3" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib3} alt="" className="imggroup" />{" "}
              </a>
              <div id="img3" className="bigimage">
                <p className="content">Login</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib3} alt="" className="imagecontent" />
              </div>

              <a href="#img5" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib5} alt="" className="imggroup" />{" "}
              </a>
              <div id="img5" className="bigimage">
                <p className="content">Ptofile</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib5} alt="" className="imagecontent" />
              </div>

              <a href="#img6" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib6} alt="" className="imggroup" />{" "}
              </a>
              <div id="img6" className="bigimage">
                <p className="content">Admin</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib6} alt="" className="imagecontent" />
              </div>

              <a href="#img1" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib1} alt="" className="imggroup" />{" "}
              </a>
              <div id="img1" className="bigimage">
                <p className="content">Home</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib1} alt="" className="imagecontent" />
              </div>

              <a href="#img4" style={{ textDecoration: "none" }}>
                {" "}
                <img src={lib4} alt="" className="imggroup" />{" "}
              </a>
              <div id="img4" className="bigimage">
                <p className="content">Category</p>

                <a href="#library" className="close">
                  {" "}
                  x
                </a>
                <img src={lib4} alt="" className="imagecontent" />
              </div>
            </div>
          </section>

          <section style={{ marginLeft: "20px", paddingTop: "50px" }}>
            <p id="Vehicle" style={{ paddingBottom: "10px" }}>
              Vehicle Detiction - Graduation Project
            </p>

            <div>
              <a href="#image3" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad3} alt="" className="imggroup" />{" "}
              </a>
              <div id="image3" className="bigimage">
                <p className="content">Sign up</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad3} alt="" className="imagecontent" />
              </div>
              <a href="#image4" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad4} alt="" className="imggroup" />{" "}
              </a>
              <div id="image4" className="bigimage">
                <p className="content">Verfication code</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad4} alt="" className="imagecontent" />
              </div>

              <a href="#image9" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad9} alt="" className="imggroup" />{" "}
              </a>
              <div id="image9" className="bigimage">
                <p className="content">Admin</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad9} alt="" className="imagecontent" />
              </div>

              <a href="#image6" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad6} alt="" className="imggroup" />{" "}
              </a>
              <div id="image6" className="bigimage">
                <p className="content">Change password</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad6} alt="" className="imagecontent" />
              </div>

              <a href="#image7" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad7} alt="" className="imggroup" />{" "}
              </a>
              <div id="image7" className="bigimage">
                <p className="content">Login</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad7} alt="" className="imagecontent" />
              </div>
              <a href="#image8" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad8} alt="" className="imggroup" />{" "}
              </a>
              <div id="image8" className="bigimage">
                <p className="content">Forget password</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad8} alt="" className="imagecontent" />
              </div>

              <a href="#image5" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad5} alt="" className="imggroup" />{" "}
              </a>
              <div id="image5" className="bigimage">
                <p className="content">Profile</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad5} alt="" className="imagecontent" />
              </div>

              <a href="#image10" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad10} alt="" className="imggroup" />{" "}
              </a>
              <div id="image10" className="bigimage">
                <p className="content">Vehicle detection </p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad10} alt="" className="imagecontent" />
              </div>
              <a href="#image1" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad1} alt="" className="imggroup" />{" "}
              </a>
              <div id="image1" className="bigimage">
                <p className="content">Home</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad1} alt="" className="imagecontent" />
              </div>

              <a href="#image2" style={{ textDecoration: "none" }}>
                {" "}
                <img src={grad2} alt="" className="imggroup" />{" "}
              </a>
              <div id="image2" className="bigimage">
                <p className="content">Violation rules</p>

                <a href="#Vehicle" className="close">
                  {" "}
                  x
                </a>
                <img src={grad2} alt="" className="imagecontent" />
              </div>
            </div>
          </section>

          <section style={{ backgroundColor: "#d7e5de61", marginTop: "50px" }}>
            <p id="graphic" style={{ marginLeft: "20px", paddingTop: "5px" }}>
              Graphic Design Projects
            </p>

            <div style={{ marginLeft: "20px", paddingTop: "15px" }}>
              <a href="#graph1" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph1} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph1" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph1} alt="" className="imagecontent" />
              </div>

              <a href="#graph2" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph2} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph2" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph2} alt="" className="imagecontent" />
              </div>

              <a href="#graph3" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph3} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph3" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph3} alt="" className="imagecontent" />
              </div>

              <a href="#graph4" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph4} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph4" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph4} alt="" className="imagecontent" />
              </div>
              <a href="#graph5" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph5} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph5" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph5} alt="" className="imagecontent" />
              </div>
              <a href="#graph6" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph6} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph6" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph6} alt="" className="imagecontent" />
              </div>
              <a href="#graph7" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph7} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph7" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph7} alt="" className="imagecontent" />
              </div>
              <a href="#graph8" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph8} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph8" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph8} alt="" className="imagecontent" />
              </div>
              <a href="#graph9" style={{ textDecoration: "none" }}>
                {" "}
                <img src={graph9} alt="" className="imggroup" />{" "}
              </a>
              <div id="graph9" className="bigimage">
                <a href="#graphic" className="close">
                  {" "}
                  x
                </a>
                <img src={graph9} alt="" className="imagecontent" />
              </div>
            </div>
          </section>
        </div>

        {/* contact section */}

        <div name="contact " className="contact">
          <div className="contacthead">
            <p>Contact Me</p>
          </div>

          <div className="container4">
            <form>
              <div className="row">
                <div className="left">
                  <label>Name</label>
                </div>
                <div className="right">
                  {" "}
                  <input type="text" />
                </div>
              </div>
              <br />

              <div class="row">
                <div className="left">
                  {" "}
                  <label>Email</label>
                </div>
                <div className="right">
                  {" "}
                  <input type="text" />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="left">
                  <label>Subject</label>
                </div>
                <div className="right">
                  <textarea style={{ height: "50px" }}></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <button> send</button>
              </div>
            </form>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default Mainpage;
