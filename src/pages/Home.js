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
          <h1>Welcome To Danger Huskie</h1>
          <p>A vector art project by Nick Volkert / nickv47</p>
          <Clearfix />
      </div>
    </div>
);

export default Home;