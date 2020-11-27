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
        <meta property="og:description" content={pagename + " | Danger Huskie Shops!"} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://dangerhuskie.com/shops"} ></meta>
        <meta property="og:type" content="website"/>
    </Helmet>
    <BodyClassName className="shops"></BodyClassName>
    <Hero
            heroClass="-shops"
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
              <h2>Redbubble</h2>
              <p>Tees, prints, stickers and more. <a href="https://dangerhuskie.redbubble.com">View my Redbubble Shop.</a></p>
            </div>
            <div id="shopSoc6" className="shopListing">
            <h2>Society6 Shop</h2>
              <p>Prints, iPhone cases, pillows, stickers and more. <a href="https://society6.com/dangerhuskie">View my Society6 Shop.</a></p>
            </div>
            <div id="shopTeePublic" className="shopListing">
                <h2>Tee Public</h2>
              <p>Tees, prints, stickers and more. <a href="https://www.teepublic.com/user/dangerhuskie">View my TeePublic Shop.</a></p>
            </div>
            <div id="shopThreadless" className="shopListing">
                <h2>Threadless Artist Shop</h2>
              <p>Tees, prints, and more. <a href="https://dangerhuskie.threadless.com/">View my Threadless Shop.</a></p>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default News;