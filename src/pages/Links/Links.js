import React from "react";
import {Helmet} from "react-helmet";
import "./Links.css";

const Links = () => (
  <div id="links-page">
    <Helmet>
      <title>Danger Huskie Links</title>
    </Helmet>
      <div id="wrapper">
          <div id="header">
              <p class="prehead">All the links</p>
              <h1>Danger Huskie!</h1>
              <p>Howdy folks! Please use the links to my shops below to view my work, or to purchase tees, stickers and prints of my works at the fine vendors below!</p>
          </div>
          <div id="link-tree">
        <p>DangerHuskie Art Shops:</p>
          <a href="https://dangerhuskie.redbubble.com" target="_blank" class="btn" rel="noopener noreferrer">Redbubble Shop</a>
              <a href="https://society6.com/dangerhuskie" target="_blank" class="btn" rel="noopener noreferrer">Society6 Shop</a>
              <a href="https://www.threadless.com/@dangerhuskie/activity" target="_blank" class="btn" rel="noopener noreferrer">Threadless Shop</a>
        <a href="https://teespring.com/stores/dangerhuskie" target="_blank" class="btn" rel="noopener noreferrer">Teespring Shop</a>
              <p>Connect and Follow!</p>
        <a href="https://www.instagram.com/dangerhuskie/" target="_blank" class="btn" rel="noopener noreferrer">Instagram</a>
        <a href="https://dangerhuskie.tumblr.com/" target="_blank" class="btn" rel="noopener noreferrer">Tumblr</a>
        <a href="https://www.facebook.com/dangerhuskie/" target="_blank" class="btn" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/dangerhuskie" target="_blank" class="btn" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.deviantart.com/dangerhuskie/" target="_blank" class="btn" rel="noopener noreferrer">DeviantArt</a>
        <p>Nickv47 Shops:</p>
        <a href="https://nickv47.redbubble.com" target="_blank" class="btn" rel="noopener noreferrer">Redbubble Shop</a>
              <a href="https://society6.com/nickv47" target="_blank" class="btn" rel="noopener noreferrer">Society6 Shop</a>
              <a href="https://nickv47.threadless.com/" target="_blank" class="btn" rel="noopener noreferrer">Threadless Shop</a>
              <a href="https://www.teepublic.com/user/nickv47" target="_blank" class="btn" rel="noopener noreferrer">TeePublic Shop</a>
              <a href="https://www.designbyhumans.com/shop/nickv47/" target="_blank" class="btn" rel="noopener noreferrer">Design by Humans Shop</a>
          </div>
          <div id="footer">
              <p><span>Danger Huskie | Greater Chicago, IL</span><span>Email: <a href="mailto:dangerhuskie@nickvolkert.com" rel="noopener noreferrer">dangerhuskie@nickvolkert.com</a></span></p>
          </div>
          <div id="dangerhuskie">
              <img src="dangerhuskie_logo.png" alt="danger huskie logo" title="danger huskie logo"/>
          </div>
      </div>
    </div>
    );

export default Links;
