import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <div>
      <div className="container1">
        <span className="salma">
          Salma Portfolio
        </span>

        <div className="topnav" id="myTopnav">
          
          <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
          </ScrollLink>
          
          <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
          </ScrollLink>

          <ScrollLink to="skils" smooth={true} duration={500}>
          Skills
          </ScrollLink>

          <ScrollLink to="about" smooth={true} duration={500}>
          About
          </ScrollLink>

        </div>
      </div>
    </div>
  );
};

export default Nav;
