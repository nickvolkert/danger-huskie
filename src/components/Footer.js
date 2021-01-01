import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";

const Footer = () => (
    <footer>
        <div id="footer-center">
            <div id="footer-top">
                <FooterLogo />
                <h4>Danger Huskie</h4>
                <div id="footer_links">
                    <ul>
                    <li><Link to="/works">Works</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to="/about">About</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to="/news">News</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to="/shops">Shops</Link></li>
                    </ul>
                </div>
                <SocialLinks/>
                <p className="danger">Made with Danger in Chicagoland.</p>
            </div>
            
            <div id="copyright">
                <p><span>Danger Huskie is</span> <span>©2021 Nick Volkert | <a href="https://nickvolkert.com/" alt="nick volkert portfolio link">nickvolkert.com</a></span></p>
            </div>
        </div>
    </footer>
);

export default Footer;