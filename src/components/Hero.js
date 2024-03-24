import React from "react";
import { Link } from "react-router-dom";


const Hero = props => (
  <div className={"hero hero" + props.heroClass}>
    <div className="heroWrapper">
      <h1>{props.heroH1}</h1>
        <div className="project-info">
          <ul>
            <li className="project-info_description">{props.heroDescription}</li>
            <li className="projectpipe">|</li>
            <li className="project-info_link"><Link to={props.heroLink}>View Work</Link></li>
          </ul>
        </div>
      </div>
  </div>
);

export default Hero;