import React from "react";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import Hero from "../../components/Hero";
import BodyClassName from "react-body-classname";
import Clearfix from "../../components/Clearfix";
import DangerHuskie from "../../json/DangerHuskie.json";
import CoreSite from "../../json/CoreSite.json";
import HelmetMeta from "../../components/HelmetMeta";

let source = DangerHuskie;
let x = 6;
let y = 4; //Happy Rainbow

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const News = () => (
    <div id="news-landing">
        <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
            altText={altmeta}
            pageTags={pageheadtags}
        />
    <BodyClassName className="newslanding"></BodyClassName>
    <Hero
            heroClass="-news"
            heroH1={pagename}
            heroImage={source[y].image}
            heroDescription={source[y].title}
            heroLink={source[y].link}
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
                {/* 03 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/pinterest-dangerhuskie.jpg" title="DangerHuskie on Pinterest" alt="Account snap of DangerHuskie on Pinterest" />
                        </div>
                        <p className="caption">DangerHuskie on Pinterest</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie on Pinterest!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: June 26th, 2021</p>
                        <p>DangerHuskie has an account is posting away on Pinterest.</p>
                        <p><a href="https://www.pinterest.com/dangerhuskie/pins/">Check out DangerHuskie out on Pinterest!</a></p>
                        <p><Link to="/works/">Check my works</Link> direct pin to a work!</p>
                        <p>-Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 02 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/dbhstore.png" title="DangerHuskie on DBH" alt="Storefront fo DangerHuskie on DBH" />
                        </div>
                        <p className="caption">DangerHuskie on DBH</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie on DBH</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: October 22nd, 2020</p>
                        <p>DangerHuskie is set up to sell on Design By Humans! Tees, mugs, stickers and mousepads for sale.</p>
                        <p><Link to="/works/">Check my works</Link> to link to my DBH store by designs.</p>
                        <p>Or check <a href="https://www.designbyhumans.com/shop/dangerhuskie/">DangerHuskie out on DBH here!</a></p>
                        <p>-Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 01 */}
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