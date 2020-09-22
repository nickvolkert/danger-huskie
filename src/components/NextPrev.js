import React from "react";
import { Link } from "react-router-dom";
import Clearfix from "../components/Clearfix";

const NextPrev = props => (
    <div id="prevNext">
    <Link id="prevLink" to={props.prevLink}>
        <img src={props.prevImage} title={props.prevTitle + " Danger Huskie | Nick Volkert"} alt={props.prevAlttext} />
        <p className="subLink">{props.prevLinkText}</p>
        <p className="mainLink">{props.prevTitle}</p>
        <Clearfix />
    </Link>
    <Link id="nextLink" to={props.nextLink}>
        <img src={props.nextImage} title={props.nextTitle + " Danger Huskie | Nick Volkert"} alt={props.nextAlttext} />
        <p className="subLink">{props.nextLinkText}</p>
        <p className="mainLink">{props.nextTitle}</p>
        <Clearfix />
    </Link>
    <Clearfix />
</div>
);


export default NextPrev;