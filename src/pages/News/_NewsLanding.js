import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import Hero from "../../components/Hero";
import BodyClassName from "react-body-classname";
import Clearfix from "../../components/Clearfix";
import DangerHuskie from "../../json/DangerHuskie.json";

let source = DangerHuskie;
let pagename = "News";
let y = 0;
let x = 4; //Happy Rainbow

const News = () => (
    <div id="news-landing">
        <Helmet>
        <title>{pagename} | Nick Volkert</title>
        <meta property="og:description" content={pagename + " | " + source[y].description} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://nickvolkert.com" + source[y].link} ></meta>
        <meta property="og:type" content="website"/>
    </Helmet>
    <BodyClassName className="newslanding"></BodyClassName>
    <Hero
            heroClass="-newslanding"
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
    </Content>

    <section>
        <Content>
            <div id="launch-image" className="leftRail">
                <div id="launch-dangerhuskie" className="leftRailImage">
                    <span>Danger Huskie Logo</span>
                </div>
                <p className="caption">DangerHuskie logo, September, 2020.</p>
            </div>
            <div id="news-body" className="body-copy rightRail">
                <h2>DangerHuskie is a GO!</h2>
                <div className="pipe"></div>
                <p>Date: September 31st, 2020</p>
                <p>DangerHuskie is now live! Thanks for visting and check back soon with a LOT of art updates!</p>
                <p>-Nick</p>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default News;