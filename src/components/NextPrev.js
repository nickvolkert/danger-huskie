import React from "react";
import { Link } from "react-router-dom";
import Clearfix from "../components/Clearfix";

let me = " | DangerHuskie by Nick Volkert";

const NextPrev = props => (
    <div id="prevNext">
        <div id="prevNextWrapper">
            <Link id="prevLink" to={props.prevLink}>
                <img data-src={props.prevImage} title={props.prevTitle + me} alt={props.prevAlttext} className="Sirv" data-options="autostart:created" />
                <p className="subLink">{props.prevLinkText}</p>
                <p className="mainLink">{props.prevTitle}</p>
                <Clearfix />
            </Link>
            <Link id="nextLink" to={props.nextLink}>
                <img data-src={props.nextImage} title={props.nextTitle + me} alt={props.nextAlttext} className="Sirv" data-options="autostart:created" />
                <p className="subLink">{props.nextLinkText}</p>
                <p className="mainLink">{props.nextTitle}</p>
                <Clearfix />
            </Link>
            <Clearfix />
        </div>
    </div>
);


export default NextPrev;