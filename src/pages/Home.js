import React from "react";
import {Helmet} from "react-helmet";
import BodyClassName from 'react-body-classname';
import Clearfix from '../components/Clearfix';

const Home = () => (
    <div id="home">
      <Helmet>
        <title>Danger Huskie Design Co.</title>
      </Helmet>
      <BodyClassName className="home-page"></BodyClassName>
      <div id="splash-wrapper">
          <h1><span>Welcome To Danger Huskie</span></h1>
          <p><span>A vector art project by</span> <span>Nick Volkert / nickv47 / Coming Fall 2020</span></p>
          <Clearfix />
      </div>
    </div>
);

export default Home;