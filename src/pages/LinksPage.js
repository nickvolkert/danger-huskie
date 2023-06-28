import React from "react";
import { Link } from "react-router-dom";
import BodyClassName from 'react-body-classname';
import LatestPBDs from "../components/LatestPBDs";
import DangerHuskie from "../json/DangerHuskie";
import SocialURLs from "../json/SocialURLs";
import CoreSite from "../json/CoreSite.json";
import Clearfix from "../components/Clearfix";
import HelmetMeta from "../components/HelmetMeta";

let postDetail = DangerHuskie;
let latestillo = [DangerHuskie.length];
let scndlatestillo = [DangerHuskie.length - 2];
let thrdlatestillo = [DangerHuskie.length - 2]
let frthlatestillo = [DangerHuskie.length - 4];

let x = 3;

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const LinksPage = () => (
    <div id="linkspage">
      <HelmetMeta 
        pageName={pagename}
        pageSubhead = {subhead}
        pageDescription={metadescription}
        pageLink={pagelinkurl}
        metaImage={metaimageurl}
        altText={altmeta}
        pageTags={pageheadtags}
    />
      <BodyClassName className="link-page"></BodyClassName>
          <div id="header">
            <p className="prehead">All the links</p>
            <h1>Danger Huskie!</h1>
            <div id="intro-text">
                <p>Howdy folks! Please use the links to my shops below to view my work, or to purchase tees, stickers and prints of my works at the fine vendors below!</p>
            </div>
          </div>
          <div id="latest-pbds">
            <p>My Latest Works:</p>
              <div>
              {postDetail.slice(scndlatestillo, latestillo).map((postDetail) => {
                return <LatestPBDs
                key={postDetail.id}
                cardLink={postDetail.link}
                cardID={postDetail.component}
                cardImage={postDetail.preview}
                cardAlt={postDetail.alttext}
                cardimageTitle={postDetail.title}
                cardBackGround={postDetail.backgroundcolor}
            />
            }).reverse()}
            <Clearfix />
            </div>
            <div className="clearfix">
                {postDetail.slice(frthlatestillo, thrdlatestillo).map((postDetail) => {
                  return <LatestPBDs
                  key={postDetail.id}
                  cardLink={postDetail.link}
                  cardID={postDetail.component}
                  cardImage={postDetail.preview}
                  cardAlt={postDetail.alttext}
                  cardimageTitle={postDetail.title}
                  cardBackGround={postDetail.backgroundcolor}
              />
              }).reverse()}
              <Clearfix />
            </div>
        </div>
          <div id="link-tree">
            <p>DangerHuskie Site!:</p>
            <Link className="btn" to="/">DangerHuskie.com</Link>
            <p>DangerHuskie Art Shops:</p>
            <a href={SocialURLs[6].link} target="_blank" className="btn" rel="noopener noreferrer">Redbubble</a>
            <a href={SocialURLs[7].link} target="_blank" className="btn" rel="noopener noreferrer">Society6</a>
            <a href={SocialURLs[8].link} target="_blank" className="btn" rel="noopener noreferrer">TeePublic</a>
            <a href={SocialURLs[10].link} target="_blank" className="btn" rel="noopener noreferrer">Threadless</a>
            <p>Connect and Follow!</p>
            <a href={SocialURLs[1].link} target="_blank" className="btn" rel="noopener noreferrer">Instagram</a>
            <a href={SocialURLs[3].link} target="_blank" className="btn" rel="noopener noreferrer">Tumblr</a>
            <a href={SocialURLs[0].link} target="_blank" className="btn" rel="noopener noreferrer">Facebook</a>
            <a href={SocialURLs[2].link} target="_blank" className="btn" rel="noopener noreferrer">Twitter</a>
            <a href={SocialURLs[5].link} target="_blank" className="btn" rel="noopener noreferrer">DeviantArt</a>
            <p>Nickv47 Shops:</p>
            <a href="https://nickv47.redbubble.com" target="_blank" className="btn" rel="noopener noreferrer">Redbubble</a>
            <a href="https://society6.com/nickv47" target="_blank" className="btn" rel="noopener noreferrer">Society6</a>
            <a href="https://nickv47.threadless.com/" target="_blank" className="btn" rel="noopener noreferrer">Threadless</a>
            <a href="https://www.teepublic.com/user/nickv47" target="_blank" className="btn" rel="noopener noreferrer">TeePublic</a>
            <a href="https://www.designbyhumans.com/shop/nickv47/" target="_blank" className="btn" rel="noopener noreferrer">Design by Humans</a>
            <p>My personal portfolio of art and comics:</p>
            <a href="https://www.nickvolkert.com/" target="_blank" className="btn" rel="noopener noreferrer">nickvolkert.com</a>
          </div>
          <div id="footer">
              <p><span>Danger Huskie | Greater Chicago, IL</span><span>Email: <a href="mailto:dangerhuskie@nickvolkert.com" rel="noopener noreferrer">dangerhuskie@nickvolkert.com</a></span></p>
          </div>
      </div>

    );

export default LinksPage;