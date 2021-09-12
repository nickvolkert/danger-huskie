import React from "react";
import { Link } from "react-router-dom";
import Clearfix from "./Clearfix";

const Basiccard = props => (
  <div className="card" id={props.cardID}>
    <Link to={props.cardLink}>
    <div className="cardWrapper">
      <div className="cardImage" style={{"backgroundColor": props.cardBackground}}>
        <img data-src={props.cardImage} title={props.cardimageTitle + " | Nick Volkert"} className="Sirv" data-options="autostart:created" alt={props.cardAlt} />
        <Clearfix />
      </div>
      <div className="cardInfo">
        <p className="cardTitleLink">{props.cardimageTitle}</p>
        <p className="cardMiniInfo">Created: {props.cardDate}</p>
        <p className="cardDescription">{props.cardDescription}</p>
      </div>
    </div>
    </Link>
  </div>
);

export default Basiccard;