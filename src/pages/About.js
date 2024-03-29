import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import BodyClassName from "react-body-classname";
import Clearfix from "../components/Clearfix";
import BlockVectorIllos from "../components/BlockVectorIllos";
import CoreSite from "../json/CoreSite.json";

import HelmetMeta from "../components/HelmetMeta";

let x = 1;

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const About = () => (
    <div id="about">
       <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
            altText={altmeta}
            pageTags={pageheadtags}
        />
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
            <div id="about-images" className="leftRail">
                <div id="about-dangerhuskie" className="leftRailImage">
                    <span>Nick Volkert in his home studio, 2021.</span>
                </div>
                <p className="caption">Nick Volkert in his home studio, 2021.</p>
            </div>
            <div id="about-body" className="body-copy rightRail">
                <h2>We live in dangerous times.</h2>
                <div className="pipe"></div>
                <p>DangerHuskie is a side project of vector illustrations I started during the covid pandemic lockdown in the Spring of our Discontent, the Year of our Lord, Year of Danger, 2020.</p>
                <p>I love creating vector art and graphics, and needed an outlet for the list after list of ideas I had been cataloging over the years. Branching off all of these ideas into their own brand "DangerHuskie" then came to me.</p>
                <p>Illustrator, as in vector graphics, have been a long long love/hate game for me. I love what I can create with with them, the scalability, and I hate how fickle they can often be. So after creating them for over 20 years, now on an almost daily basis, I'm going to show vector graphics who's boss!</p>
                <p>"DangerHuskie" is going to be fun, scary, challenging, cute, and unrelenting. I'm glad you found it, and I hope you stay along for the ride. I have LOTS in store for you.</p>
                <p>All works for sale at my shops. <Link to={CoreSite[7].link}>View gallery.</Link></p>
                <p>-Nick</p>
            </div>
            <Clearfix />
        </Content>
       
        <BlockVectorIllos/>
    </section>
    </div>
    );

export default About;