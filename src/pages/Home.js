import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Clearfix from "../components/Clearfix";
import DangerHuskie from "../json/DangerHuskie.json";
import CoreSite from "../json/CoreSite.json";
import Basiccard from "../components/Basiccard";
import Hero from "../components/Hero";
import Btn from '../components/Btn';
import HelmetMeta from "../components/HelmetMeta";

let source = DangerHuskie;
let x = 0;
let y = 1; //Annoyed Yeti

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

let lastillo = [DangerHuskie.length];
let threeillo = [DangerHuskie.length - 6];

const Home = () => (
  <div id="home">
   <HelmetMeta 
        pageName={pagename}
        pageSubhead = {subhead}
        pageDescription={metadescription}
        pageLink={pagelinkurl}
        metaImage={metaimageurl}
        altText={altmeta}
        pageTags={pageheadtags}
    />
    <Hero
            heroClass="-homepage"
            heroH1={pagename}
            heroImage={source[y].image}
            heroDescription={source[y].title}
            heroLink={source[y].link}
        />
    <Content>
      <div id="intro-text">
            <p>DangerHuskie is a side project of vector illustrations created by Chicagoland artist Nick Volkert. The project started during the covid pandemic lockdown in the Spring of our Discontent, the Year of our Lord, Year of Danger, 2020. <Link to="/about">Learn more.</Link></p>
            <div className="pipe"></div>
        </div>
    </Content>

    <section>
        <Content>
        {source.slice(threeillo, lastillo).map((postDetail) => {
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
            <div className="view-more-container_series">
                <Btn
                    btnlink="/works/"
                    variant="btn-primary btn"
                    content="View All Works"
                />
            </div>
            <Clearfix />
        </Content>
    </section>
  </div>
);

export default Home;