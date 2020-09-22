import React from "react";
import { Link } from "react-router-dom";

const Basiccard = props => (
  <div className="card" id={props.cardID}>
    <div className="cardImage" style={{"backgroundColor": props.cardBackGround}}>
      <Link to={props.cardLink}><img src={props.cardImage} title={props.cardimageTitle + " | Nick Volkert"} alt={props.cardAlt} /></Link>
    </div>
    <div className="cardInfo">
      <p className="cardTitleLink"><Link to={props.cardLink}>"{props.cardimageTitle}"</Link></p>
      <p className="cardMiniInfo">Created: {props.cardDate} | Role: "Illustrator"</p>
      <p className="cardDescription">{props.cardDescription}</p>
    </div>
  </div>
);

export default Basiccard;