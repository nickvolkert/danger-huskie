import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import BodyClassName from 'react-body-classname';
import Clearfix from '../components/Clearfix';

const Home = () => (
    <div id="home">
      <Helmet>
        <title>Danger Huskie Design Co.</title>
      </Helmet>
      <BodyClassName className="home-page"></BodyClassName>
      <div>
          <h1>Welcome To Danger Huskie</h1>
        <Clearfix />
      </div>
    </div>
);

export default Home;