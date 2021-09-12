import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Hero from "../components/Hero";
import BodyClassName from "react-body-classname";
import Clearfix from "../components/Clearfix";
import DangerHuskie from "../json/DangerHuskie.json";
import CoreSite from "../json/CoreSite.json";
import HelmetMeta from "../components/HelmetMeta";
import BlockVectorIllos from "../components/BlockVectorIllos";

let source = DangerHuskie;
let x = 4;
let y = 12; //Cloud Hug

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const News = () => (
    <div id="shops-landing">
        <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
            altText={altmeta}
            pageTags={pageheadtags}
        />
    <BodyClassName className="shops"></BodyClassName>
    <Hero
            heroClass="-shops"
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
            <div id="shopDBH" className="shopListing">
                <h2>Design By Humans Shop</h2>
              <p>Tees, prints, and more. <a href="https://www.designbyhumans.com/shop/dangerhuskie/">Design By Humans Shop.</a></p>
            </div>
        </Content>
        <Clearfix />
    </section>
    <BlockVectorIllos />
    </div>
    );

export default News;