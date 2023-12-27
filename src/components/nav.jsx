import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <div className="sticky-nav"> {/* Add a wrapper div for styling */}
      <div className="container1">
        <span className="salma">
          Salma Portfolio
        </span>

        <div className="nav1" >
          
          <ScrollLink to="contact" smooth={true} >
          Contact
          </ScrollLink>
          
          <ScrollLink to="projects" smooth={true} >
          Projects
          </ScrollLink>

          <ScrollLink to="skills" smooth={true} >
          Skills
          </ScrollLink>

          <ScrollLink to="about" smooth={true} >
          About
          </ScrollLink>

        </div>
      </div>
    </div>
  );
};

export default Nav;
