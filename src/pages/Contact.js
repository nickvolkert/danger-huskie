import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/Content";
import BodyClassName from "react-body-classname";
import Clearfix from "../components/Clearfix";
import BlockVectorIllos from "../components/BlockVectorIllos";
import HelmetMeta from "../components/HelmetMeta";
import SocialURLs from "../json/SocialURLs.json";
import ContactSocialLink from "../components/ContactSocialLink";

let pagename = "Contact";
let subhead = "Reach out to DangerHuskie"
let metadescription = "Contact the artist about the vector project DangerHuskie by Chicagoland artist Nick Volkert";
let pagelinkurl = "/contact";
let metaimageurl = "https://nickvolkert.sirv.com/dangerhuskie/site-graphics/00-dribblemasthead.jpg";

const Contact = () => (
    <div id="contact">
        <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
        />
    <BodyClassName className="contact-page"></BodyClassName>
    <div className="hero hero-about">
        <h1>{pagename}</h1>
    </div>
    <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{pagename}</li>
                </ul>
            </div>
    </Content>

    <section>
        <Content>
            <div id="about-images" className="leftRail">
                <div id="contact-dangerhuskie" className="leftRailImage">
                    <span>Nick Volkert working in his home studio in Chicagoland.</span>
                </div>
                <p className="caption">Nick Volkert in his home studio, 2021.</p>
            </div>
            <div id="about-body" className="body-copy rightRail padding-bottom-20px">
                <h2>Reach out to DangerHuskie...</h2>
                <div className="pipe"></div>
                <p className="padding-bottom-20px">...And Say "Hey". Despite the Danger thing I'm pretty friendly.</p>
                <h3>Nick Volkert |  Creative  |  Greater Chicago, IL</h3>
                <p>Email: <a href="mailto:dangerhuskie@nickvolkert.com">dangerhuskie@nickvolkert.com</a></p>
            </div>
            <div id="socialsection">
                    <div id="dangerhuskie-socials" className="socialcolumn">
                        <h3>DangerHuskie Social Links</h3>
                        <ul>
                        {SocialURLs.map((postDetail, i) => {
                            return <ContactSocialLink
                                        key={postDetail.id}
                                        contactSocial={postDetail.social}
                                        contactLink={postDetail.link}
                                    />
                        })}
                        </ul>
                    </div>
                    <Clearfix />
                </div>
            <Clearfix />
        </Content>
        <BlockVectorIllos/>
    </section>
    </div>
    );

export default Contact;