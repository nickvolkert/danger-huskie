import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import BodyClassName from "react-body-classname";
import Clearfix from "../components/Clearfix";
import DangerHuskie from "../json/DangerHuskie.json";

let source = DangerHuskie;
let pagename = "About";
let y = 3;

const About = () => (
    <div id="about">
        <Helmet>
        <title>{pagename} | Nick Volkert</title>
        <meta property="og:description" content={pagename + " | " + source[y].description} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://nickvolkert.com" + source[y].link} ></meta>
        <meta property="og:type" content="website"/>
    </Helmet>
    <BodyClassName className="about-page"></BodyClassName>
    <div className="hero hero-about">
        <h1>{pagename}</h1>
    </div>
    <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{pagename}</li>
                </ul>
            </div>
    </Content>

    <section>
        <Content>
            <div id="about-images">
                <div id="about-dangerhuskie">
                    <span>Image of Nick Volkert at Spec Mural set up at the Merchandise Mart, Chicago, IL.</span>
                </div>
                <p className="caption">Nick Volkert at Merchandise Mart, 2016.</p>
            </div>
            <div id="about-body" className="body-copy">
                <h2>We live in dangerous times.</h2>
                <div className="pipe"></div>
                <p>DangerHuskie is a side project of vector illustrations I started during the covid pandemic lockdown in the Spring of our Discontent, the Year of our Lord, Year of Danger, 2020.</p>
                <p>I love creating vector art and graphics, and needed an outlet for the list upon list of ideas I had been cataloging over the years. And then branching off vector work into its own brand "DangerHuskie" came to me.</p>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default About;