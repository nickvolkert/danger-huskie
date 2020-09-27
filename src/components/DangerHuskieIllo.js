import React from "react";
import {Helmet} from "react-helmet";
import BodyClassName from "react-body-classname";
import { Link } from "react-router-dom";
import Clearfix from "./Clearfix";
import Content from "../components/Content";


const Renderedillo = props => (
    <div id="projectwrapper" style={{"backgroundColor": props.illoBackGroundColor}} className={props.illoBackgroundType}>
        <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li><Link to="/works">Works</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{props.illoTitle}</li>
                </ul>
            </div>
        <div className="project">
            <Helmet>
                <title>{props.illoTitle} | Danger Huskie by Nick Volkert</title>
                <meta property="og:description" content={props.illoTitle + " | " + props.illoDescription} />
                <meta property="og:image" content={props.illoImage}></meta>
                <meta property="og:url" content={"http://nickvolkert.com" + props.illoLink} ></meta>
                <meta property="og:type" content="website"/>
            </Helmet>
            <BodyClassName className="dangerhuskie"></BodyClassName>
            <div className="projectImage" style={{"backgroundColor": props.illoBackGroundColor}}>
                <img src={props.illoImage} title={props.illoTitle + " | Danger Huskie by Nick Volkert"} alt={props.illoAlt} />
                <a href={props.DeviantArt} className="btn-secondary-blue btn linkDevArt" target="_blank" rel="noopener noreferrer">Like on Deviant Art</a>
                <a href={props.Tumblr} className="btn-secondary-blue btn linkTumblr" target="_blank" rel="noopener noreferrer">Like on Tumblr</a>
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
                    <p className="purchasePrint">Purchase a print at the following sites:</p>
                    <a href={props.Redbubble} className="btn-primary btn linkRedBubble" target="_blank" rel="noopener noreferrer">Redbubble</a>
                    <a href={props.Society6} className="btn-secondary-blue btn linkSociety6" target="_blank" rel="noopener noreferrer">Society6</a>
                    <a href={props.Dbh} className="btn-secondary-blue btn linkDBH" target="_blank" rel="noopener noreferrer">Design By Humans</a>
                    <a href={props.TeePublic} className="btn-secondary-blue btn linkTeePublic" target="_blank" rel="noopener noreferrer">Tee Public</a>
                    <a href={props.Threadless} className="btn-secondary-blue btn linkThreadless" target="_blank" rel="noopener noreferrer">Threadless</a>
                    <a href={props.Teespring} className="btn-secondary-blue btn linkTeespring" target="_blank" rel="noopener noreferrer">Tee Spring</a>
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


