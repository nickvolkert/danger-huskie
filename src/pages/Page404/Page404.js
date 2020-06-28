import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => (
    <div id="Page404">
        <Helmet>
            <title>Danger! Danger!</title>
        </Helmet>
        <div id="hero" className="Page404-image">
          <h1>404</h1>
        </div>
		<h2>Don't venture here little pup!</h2>
        <p>Get back to safety: <Link to="/">Go back home</Link></p>
    </div>
    );

export default Page404;