import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => (
  <nav>
    <div id="nav_wrapper">
      <Logo />
      <div id="link_ribbon">
        <ul>
          <li><Link to="/works">Works</Link></li>
          <li className="spacer">|</li>
          <li><Link to="/about">About</Link></li>
          <li className="spacer">|</li>
          <li><Link to="/news">News</Link></li>
          <li className="spacer">|</li>
          <li><Link to="/shops">Shops</Link></li>
          <li className="spacer">|</li>
          <li><Link to="/links">Links</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Navigation;