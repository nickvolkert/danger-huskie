import React from "react";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import BodyClassName from "react-body-classname";
import Clearfix from "../../components/Clearfix";
import DangerHuskie from "../../json/DangerHuskie.json";
import Basiccard from "../../components/Basiccard";
import Hero from "../../components/Hero";
import HelmetMeta from "../../components/HelmetMeta";
import SocialURLs from "../../json/SocialURLs.json";

let source = DangerHuskie;
let x = 3;
let y = 11; //Happy Rainbow
let pagename = "Works";
let subhead = "Vector works of DangerHuskie"
let metadescription = "Complete gallery of vector works of DangerHuskie by Nick Volkert.";
let pagelinkurl = "/works";
let metaimageurl = DangerHuskie[x].meta;

const Home = () => (
  <div id="works-landing">
    <HelmetMeta 
        pageName={pagename}
        pageSubhead = {subhead}
        pageDescription={metadescription}
        pageLink={pagelinkurl}
        metaImage={metaimageurl}
    />
    <BodyClassName className="works"></BodyClassName>
    <Hero
            heroClass="-works"
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
        <div className="intro-text">
            <h2>Feeling Dangerous?</h2>
            <h3>DangerHuskie is a side project of vector illustrations I started during the covid pandemic lockdown in the Spring of our Discontent, the Year of our Lord, Year of Danger, 2020.</h3>
            <p>All works for sale. Click on a work to links to my shops!</p>
            <p>Get daily updates at: <a href={SocialURLs[3].link} target="_blank" rel="noopener noreferrer">Tumblr</a> or <a href={SocialURLs[1].link} target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
            <div className="pipe"></div>
        </div>
    </Content>

    <section>
        <Content>
        {source.map((postDetail) => {
                return <Basiccard
                    key={postDetail.id}
                    cardLink={postDetail.link}
                    cardID={postDetail.component}
                    cardImage={postDetail.preview}
                    cardAlt={postDetail.alttext}
                    cardimageTitle={postDetail.title}
                    cardDate={postDetail.date}
                    cardDescription={postDetail.description}
                    cardBackground={postDetail.backgroundcolor}
                />
            }).reverse()}
            <Clearfix />
        </Content>
    </section>
  </div>
);

export default Home;