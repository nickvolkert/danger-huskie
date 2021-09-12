import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import CoreSite from "../json/CoreSite.json";

const Footer = () => (
    <footer>
        <div id="footer-center">
            <div id="footer-top">
                <FooterLogo />
                <h4>Danger Huskie</h4>
                <div id="footer_links">
                    <ul>
                    <li><Link to={CoreSite[7].link}>Works</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to={CoreSite[1].link}>About</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to={CoreSite[6].link}>News</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to={CoreSite[4].link}>Shops</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to={CoreSite[2].link}>Contact</Link></li>
                    <li className="spacer">|</li>
                    <li><Link to={CoreSite[3].link}>Links</Link></li>
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