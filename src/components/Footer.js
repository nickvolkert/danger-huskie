import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => (
    <footer>
        <div id="footer-center">
            <div id="footer-top">
                <h4>Danger Huskie</h4>
                <p>Coming Fall 2020  |  <a href="/links">My Links</a></p>
            </div>
            <SocialLinks/>
            <div id="copyright">
                <p>Danger Huskie is ©2020 Nick Volkert | <a href="https://nickvolkert.com/" target="_blank" alt="nick volkert portfolio link" rel="noopener noreferrer">nickvolkert.com</a></p>
            </div>
        </div>
    </footer>
);

export default Footer;