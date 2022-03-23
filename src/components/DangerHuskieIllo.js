import React from "react";
import {Helmet} from "react-helmet";
import BodyClassName from "react-body-classname";
import { Link } from "react-router-dom";
import Clearfix from "./Clearfix";
import Content from "../components/Content";

let domain = "https://dangerhuskie.com";
let me = " | DangerHuskie by Nick Volkert";

const Renderedillo = props => (
    <div id="projectwrapper" style={{"backgroundColor": props.illoBackGroundColor}} className={props.illoBackgroundType}>
        <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li><Link to="/works/">Works</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{props.illoTitle}</li>
                </ul>
            </div>
        <div className="project">
            <Helmet>
                <title>{props.illoTitle + me}</title>
                <link rel="canonical" href={domain + props.illoLink} />
                <meta name="title" content={props.illoTitle + me} />
                <meta name="keywords" content={props.illoTags} />
                <meta name="description" content={props.illoDescription} />
                <meta property="og:description" content={props.illoDescription} />
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DangerHuskie" />

                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content={domain + props.illoLink} />
                <meta property="og:title" content={props.illoTitle + me}/>
                <meta property="og:description" content={props.illoDescription}/>
                <meta property="og:image" content={props.metaImage}/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={domain + props.illoLink}/>
                <meta property="twitter:title" content={props.illoTitle + me}/>
                <meta property="twitter:description" content={props.illoDescription}/>
                <meta property="twitter:image" content={props.metaImage}/>
                <meta name="twitter:image:alt" content={props.illoAlt} />
            </Helmet>
            <BodyClassName className="dangerhuskie"></BodyClassName>
            <div className="projectImage" style={{"backgroundColor": props.illoBackGroundColor}}>
                <img src={props.illoImage} title={props.illoTitle + me} alt={props.illoAlt} />
                <div className="socialBtnWrapper">
                    <a href={props.DeviantArt} className="btn-ghost btn linkDevArt" target="_blank" rel="noopener noreferrer">DeviantArt</a>
                    <a href={props.Tumblr} className="btn-ghost btn linkTumblr" target="_blank" rel="noopener noreferrer">Tumblr</a>
                    <a href={props.Pinterest} className="btn-ghost btn linkPinterest" target="_blank" rel="noopener noreferrer">Pinterest</a>
                </div>
            </div>
            <div className="projectInfo">
                <div className="projectDesc">
                    <p className="workPrehead">Danger Huskie #{props.illoID}</p>
                    <h1>{props.illoTitle}</h1>
                    <p className="projectYear">Created: {props.illoDate}</p>
                    <p className="illoDescription">{props.illoDescription}</p>
                    <p className="projectSkills">Skills: Adobe Illustrator, Vector Art</p>
                </div>
                <div className="projectLinks">
                    <p className="purchasePrint">Purchase a prints, tees, stickers and more:</p>
                    <a href={props.Redbubble} className="btn-primary btn linkRedBubble" target="_blank" rel="noopener noreferrer">Redbubble</a>
                    <a href={props.Society6} className="btn-secondary-blue btn linkSociety6" target="_blank" rel="noopener noreferrer">Society6</a>
                    <a href={props.Dbh} className="btn-secondary-blue btn linkDBH" target="_blank" rel="noopener noreferrer">Design By Humans</a>
                    <a href={props.TeePublic} className="btn-secondary-blue btn linkTeePublic" target="_blank" rel="noopener noreferrer">Tee Public</a>
                    <a href={props.Threadless} className="btn-secondary-blue btn linkThreadless" target="_blank" rel="noopener noreferrer">Threadless</a>
                </div>
                <div className="socialBtnWrapper">
                    <a href={props.DeviantArt} className="btn-ghost btn linkDevArt" target="_blank" rel="noopener noreferrer">DeviantArt</a>
                    <a href={props.Tumblr} className="btn-ghost btn linkTumblr" target="_blank" rel="noopener noreferrer">Tumblr</a>
                    <a href={props.Pinterest} className="btn-ghost btn linkPinterest" target="_blank" rel="noopener noreferrer">Pinterest</a>
                </div>
                <div className="projectTags">
                    <p className="projectTagTitle">Tags:</p>
                    <p>{props.illoTags}</p>
                </div>	
            </div>
            <Clearfix />
        </div>
        </Content>
    </div>
);

export default Renderedillo;


