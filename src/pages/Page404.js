import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import HelmetMeta from "../components/HelmetMeta";
import BodyClassName from "react-body-classname";
import DangerHuskie from "../json/DangerHuskie.json";
import CoreSite from "../json/CoreSite.json";
import Hero from "../components/Hero";

let source = DangerHuskie;
let x = 5;
let y = 3; //Varsity Pumpkin

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const Page404 = () => (
    <div id="Page404">
        <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
            altText={altmeta}
            pageTags={pageheadtags}
        />
    <BodyClassName className="page404"></BodyClassName>
    <Hero
            heroClass="-varsitypumpkin"
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
            <div className="intro-text">
                <h2>Don't venture here little pup!</h2>
                <p>Get back to safety: <Link to="/" rel="dofollow">Go back home</Link></p>
            </div>
        </Content>
    </section>
    </div>
    );

export default Page404;