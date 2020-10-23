import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import BodyClassName from "react-body-classname";
import DangerHuskie from "../json/DangerHuskie.json";
import Hero from "../components/Hero";

let source = DangerHuskie;
let pagename = "404";
let y = 3;
let x = 3; //Varsity Pumpkin

const Page404 = () => (
    <div id="Page404">
        <Helmet>
        <title>{pagename} | Nick Volkert</title>
        <meta property="og:description" content={pagename + " | " + source[y].description} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://dangerhuskie.com" + source[y].link} ></meta>
        <meta property="og:type" content="website"/>
    </Helmet>
    <BodyClassName className="page404"></BodyClassName>
    <Hero
            heroClass="-varsitypumpkin"
            heroH1={pagename}
            heroImage={source[x].image}
            heroDescription={source[x].title}
            heroLink={source[x].link}
        />
    <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{pagename}</li>
                </ul>
            </div>
        <div className="intro-text">
            <h2>Don't venture here little pup!</h2>
            <p>Get back to safety: <Link to="/">Go back home</Link></p>
        </div>
    </Content>

    <section>
    </section>
    </div>
    );

export default Page404;