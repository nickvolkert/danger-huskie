import React from "react";

const ContactSocialLink = props => (
    <li id={props.cardID} key={props.cardKey}>
        <p><a href={props.contactLink} target="_blank" rel="noopener noreferrer">{props.contactSocial}</a></p>
    </li>
);


export default ContactSocialLink;
