import React from "react";
import { Link } from "react-router-dom";

const LatestPBDs = props => (
  <div className="pbds" id={props.cardID}>
    <div className="cardImage" style={{"backgroundColor": props.cardBackGround}}>
      <Link to={props.cardLink} className="pbd-image-link"><img src={props.cardImage} title={props.cardimageTitle + " | Nick Volkert"} alt={props.cardAlt} /></Link>
    </div>
    <div className="cardInfo">
      <p className="cardTitleLink"><Link to={props.cardLink}>{props.cardimageTitle}</Link></p>
    </div>
  </div>
);

export default LatestPBDs;