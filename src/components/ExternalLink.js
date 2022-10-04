import React from "react";

const ExternalLink = props => (
    <>
        <p className="ext-link"><a href={props.externalurl} rel="noopener noreferrer" target="_blank">{props.linktext}</a></p>
    </>
);


export default ExternalLink;