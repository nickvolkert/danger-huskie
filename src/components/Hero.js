import React from "react";
import { Link } from "react-router-dom";


const Hero = props => (
  <div className={"hero hero" + props.heroClass}>
      <h1>{props.heroH1}</h1>
      <div className="project-info">
        <p><span className="project-info_description">{props.heroDescription}</span> <span className="project-info_pipe">|</span> <span className="project-info_link"><Link to={props.heroLink}>View Work</Link></span></p>
      </div>
  </div>
);

export default Hero;