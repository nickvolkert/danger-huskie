import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Hero from "../components/Hero";
import BodyClassName from "react-body-classname";
import Clearfix from "../components/Clearfix";
import DangerHuskie from "../json/DangerHuskie.json";

let source = DangerHuskie;
let pagename = "Shops";
let y = 0;
let x = 5; //Joyous Rainbow

const News = () => (
    <div id="shops-landing">
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
            <div id="shopRedbubble" className="shopListing">
              <div id="shopRedbubbleImg">
                  <span>Redbubble Shop Image</span>
              </div>
              <p>Tees, prints, stickers and more. <a href="https://www.redbubble.com/people/dangerhuskie/explore?asc=u&page=1&sortOrder=recent">View my Redbubble Shop.</a></p>
            </div>
            <div id="shopSoc6" className="shopListing">
              <div id="shopSoc6Img">
                  <span>Society6 Shop Image</span>
              </div>
              <p>Prints, iPhone cases, pillows, stickers and more. <a href="https://society6.com/dangerhuskie">View my Society6 Shop.</a></p>
            </div>
            <div id="shopTeePublic" className="shopListing">
              <div id="shopTeePublicImg">
                  <span>TeePublic Shop Image</span>
              </div>
              <p>Tees, prints, stickers and more. <a href="https://www.teepublic.com/user/dangerhuskie">View my TeePublic Shop.</a></p>
            </div>
            <div id="shopThreadeless" className="shopListing">
              <div id="shopThreadelessImg">
                  <span>Threadless Shop Image</span>
              </div>
              <p>Tees, prints, and more. <a href="https://dangerhuskie.threadless.com/">View my Threadless Shop.</a></p>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default News;