import React from "react";
import {Helmet} from "react-helmet";
import BodyClassName from 'react-body-classname';
import LatestPBDs from "../components/LatestPBDs";
import DangerHuskie from "../json/DangerHuskie";
import Clearfix from "../components/Clearfix";

let postDetail = DangerHuskie;

const LinksPage = () => (
    <div id="linkspage">
       <Helmet>
        <title>Danger Huskie | ALL the Links</title>
      </Helmet>
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
              <LatestPBDs
                    key={postDetail[0].id}
                    cardLink={postDetail[0].link}
                    cardID={postDetail[0].component}
                    cardImage={postDetail[0].image}
                    cardAlt={postDetail[0].alttext}
                    cardimageTitle={postDetail[0].title}
                    cardBackGround={postDetail[0].backgroundcolor}
                />
                <LatestPBDs
                    key={postDetail[1].id}
                    cardLink={postDetail[1].link}
                    cardID={postDetail[1].component}
                    cardImage={postDetail[1].image}
                    cardAlt={postDetail[1].alttext}
                    cardimageTitle={postDetail[1].title}
                    cardBackGround={postDetail[1].backgroundcolor}
                />
                <LatestPBDs
                    key={postDetail[2].id}
                    cardLink={postDetail[2].link}
                    cardID={postDetail[2].component}
                    cardImage={postDetail[2].image}
                    cardAlt={postDetail[2].alttext}
                    cardimageTitle={postDetail[2].title}
                    cardBackGround={postDetail[2].backgroundcolor}
                />
                <LatestPBDs
                    key={postDetail[3].id}
                    cardLink={postDetail[3].link}
                    cardID={postDetail[3].component}
                    cardImage={postDetail[3].image}
                    cardAlt={postDetail[3].alttext}
                    cardimageTitle={postDetail[3].title}
                    cardBackGround={postDetail[3].backgroundcolor}
                />
            
            <Clearfix />
        </div>
          <div id="link-tree">
            <p>DangerHuskie Art Shops:</p>
            <a href="https://dangerhuskie.redbubble.com" target="_blank" className="btn" rel="noopener noreferrer">Redbubble Shop</a>
            <a href="https://society6.com/dangerhuskie" target="_blank" className="btn" rel="noopener noreferrer">Society6 Shop</a>
            <a href="https://www.threadless.com/@dangerhuskie/activity" target="_blank" className="btn" rel="noopener noreferrer">Threadless Shop</a>
            <p>Connect and Follow!</p>
            <a href="https://www.instagram.com/dangerhuskie/" target="_blank" className="btn" rel="noopener noreferrer">Instagram</a>
            <a href="https://dangerhuskie.tumblr.com/" target="_blank" className="btn" rel="noopener noreferrer">Tumblr</a>
            <a href="https://www.facebook.com/dangerhuskie/" target="_blank" className="btn" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/dangerhuskie" target="_blank" className="btn" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.deviantart.com/dangerhuskie/" target="_blank" className="btn" rel="noopener noreferrer">DeviantArt</a>
            <p>Nickv47 Shops:</p>
            <a href="https://nickv47.redbubble.com" target="_blank" className="btn" rel="noopener noreferrer">Redbubble Shop</a>
            <a href="https://society6.com/nickv47" target="_blank" className="btn" rel="noopener noreferrer">Society6 Shop</a>
            <a href="https://nickv47.threadless.com/" target="_blank" className="btn" rel="noopener noreferrer">Threadless Shop</a>
            <a href="https://www.teepublic.com/user/nickv47" target="_blank" className="btn" rel="noopener noreferrer">TeePublic Shop</a>
            <a href="https://www.designbyhumans.com/shop/nickv47/" target="_blank" className="btn" rel="noopener noreferrer">Design by Humans Shop</a>
          </div>
          <div id="footer">
              <p><span>Danger Huskie | Greater Chicago, IL</span><span>Email: <a href="mailto:dangerhuskie@nickvolkert.com" rel="noopener noreferrer">dangerhuskie@nickvolkert.com</a></span></p>
          </div>
      </div>

    );

export default LinksPage;