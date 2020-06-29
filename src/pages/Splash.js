import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import BodyClassName from 'react-body-classname';
import Clearfix from '../components/Clearfix';

const Splash = () => (
    <div id="splash">
      <Helmet>
        <title>Danger Huskie</title>
      </Helmet>
      <BodyClassName className="splash-page"></BodyClassName>
      <div id="splash-wrapper">
          <div id="splash-logo"><span>Welcome To Danger Huskie</span></div>
          <p><span>A vector art project by</span> <span>Nick Volkert / nickv47 / Coming Fall 2020</span></p>
          <div className="btn__wrapper"><Link to="/links" className="btn__link btn__link-primary">My Links</Link></div>
          <Clearfix />
      </div>
    </div>
);

export default Splash;