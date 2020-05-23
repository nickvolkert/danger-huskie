import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => (
    <div id="Page404">
        <Helmet>
            <title>404 | Nick Volkert</title>
        </Helmet>
        <div id="hero" className="Page404-image">
          <h1>404</h1>
        </div>
		<h2>What in da hell?!... </h2>
        <p>Sorry, we couldn't find that. Prob because I'm a react noob. <Link to="/">Go back home</Link></p>
    </div>
    );

export default Page404;