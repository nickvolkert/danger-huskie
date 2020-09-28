import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import BodyClassName from "react-body-classname";
import Clearfix from "../../components/Clearfix";
import DangerHuskie from "../../json/DangerHuskie.json";
import Basiccard from "../../components/Basiccard";
import Hero from "../../components/Hero";

let source = DangerHuskie;
let pagename = "Works";
let y = 0;
let x = 3; //Varsity Pumpkin

const Home = () => (
  <div id="home">
    <Helmet>
        <title>{pagename} | Nick Volkert</title>
        <meta property="og:description" content={pagename + " | " + source[y].description} />
        <meta property="og:image" content={source[y].image}></meta>
        <meta property="og:url" content={"http://nickvolkert.com" + source[y].link} ></meta>
        <meta property="og:type" content="website"/>
    </Helmet>
    <BodyClassName className="home"></BodyClassName>
    <Hero
            heroClass="-varsitypumpkin"
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
        <div className="intro-text">
            <h2>Feeling Dangerous?</h2>
            <h3>DangerHuskie is a side project of vector illustrations I started during the covid pandemic lockdown in the Spring of our Discontent, the Year of our Lord, Year of Danger, 2020.</h3>
            <p>Get daily updates at: <a href="http://dangerhuskie.tumblr.com/" target="_blank" rel="noopener noreferrer">Tumblr</a> or <a href="https://instagram.com/dangerhuskie/" target="_blank" rel="noopener noreferrer">Instagram</a> or visit: <a href="https://www.dangerhuskie.com" target="_blank" rel="noopener noreferrer">DangerHuskie.com</a></p>
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
                />
            })}
            <Clearfix />
        </Content>
    </section>
  </div>
);

export default Home;