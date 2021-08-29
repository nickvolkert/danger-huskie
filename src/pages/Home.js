import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import Clearfix from "../components/Clearfix";
import DangerHuskie from "../json/DangerHuskie.json";
import Basiccard from "../components/Basiccard";
import Hero from "../components/Hero";
import Btn from '../components/Btn';
import HelmetMeta from "../components/HelmetMeta";

let source = DangerHuskie;
let x = 19; //Varsity Pumpkin Head
let pagename = "A Time For Danger";
let subhead = "DangerHuskie by Nick Volkert"
let metadescription = "Home page of the vector project DangerHuskie by Nick Volkert.";
let pagelinkurl = "/";
let metaimageurl = DangerHuskie[x].meta;

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
    />
    <Hero
            heroClass="-homepage"
            heroH1={pagename}
            heroImage={source[x].image}
            heroDescription={source[x].title}
            heroLink={source[x].link}
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