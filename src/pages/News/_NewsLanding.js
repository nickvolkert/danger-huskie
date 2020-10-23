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
        <meta property="og:description" content={pagename + " | DangerHuskie News!"} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://dangerhuskie.com/news"} ></meta>
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
            
            <div id="news-body" className="body-copy">
            <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <img src="https://nickvolkert.com/img/dangerhuskie/site-graphics/blog/dbhstore.png" title="DangerHuskie on DBH" alt="Storefront fo DangerHuskie on DBH" />
                        </div>
                        <p className="caption">DangerHuskie on DBH</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie on DBH</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: October 22nd, 2020</p>
                        <p>DangerHuskie is set up to sell on Design By Humans! Tees, mugs, stickers and mousepads for sale.</p>
                        <p><Link to="/works">Check my works</Link> to link to my DBH store by designs.</p>
                        <p>Or check <a href="https://www.designbyhumans.com/shop/dangerhuskie/">DangerHuskie out on DBH here!</a></p>
                        <p>-Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                <div className="news-entry">
                    <div id="launch-image" className="leftRail">
                        <div id="launch-dangerhuskie" className="leftRailImage">
                            <span>Danger Huskie Logo</span>
                        </div>
                        <p className="caption">DangerHuskie logo, September, 2020.</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie is a GO!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: September 31st, 2020</p>
                        <p>DangerHuskie is now live! Thanks for visting and check back soon with a LOT of art updates!</p>
                        <p>-Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default News;