import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CoreSite from "../json/CoreSite.json";

const Navigation = () => (
  <nav>
    <div id="nav_wrapper">
      <Link to="/"><Logo /></Link>
      <div id="link_ribbon">
        <ul>
          <li><Link to={CoreSite[7].link}>Works</Link></li>
          <li className="spacer">|</li>
          <li><Link to={CoreSite[1].link}>About</Link></li>
          <li className="spacer">|</li>
          <li><Link to={CoreSite[6].link}>News</Link></li>
          <li className="spacer">|</li>
          <li><Link to={CoreSite[4].link}>Shops</Link></li>
          <li className="spacer">|</li>
          <li><Link to={CoreSite[2].link}>Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Navigation;