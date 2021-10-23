import React from "react";
import { Link } from "react-router-dom";

const LatestPBDs = props => (
  <div className="pbds" id={props.cardID}>
      <Link to={props.cardLink} className="pbd-image-link">
        <div className="cardImage" style={{"backgroundColor": props.cardBackGround}}><img src={props.cardImage} title={props.cardimageTitle + " | Nick Volkert"} alt={props.cardAlt} /></div>
        <p className="cardTitleLink">{props.cardimageTitle}</p>
      </Link>
  </div>
);

export default LatestPBDs;