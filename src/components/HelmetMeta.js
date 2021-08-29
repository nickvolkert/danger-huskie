import React from "react";
import {Helmet} from "react-helmet";

const HelmetMeta = props => (
    <>
        <Helmet>
            <title>{props.pageName} | DangerHuskie by Nick Volkert</title>
            <meta name="title" content={props.pageName + " | DangerHuskie by Nick Volkert"} />
            <meta name="description" content={props.pageDescription} />
            <meta property="og:description" content={props.pageDescription} />
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="DangerHuskie" />

            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content={"http://dangerhuskie.com" + props.pageLink} />
            <meta property="og:title" content={props.pageName + " | DangerHuskie by Nick Volkert"}/>
            <meta property="og:description" content={props.pageDescription}/>
            <meta property="og:image" content={props.metaImage}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={"http://dangerhuskie.com" + props.pageLink}/>
            <meta property="twitter:title" content={props.pageName + " | DangerHuskie by Nick Volkert"}/>
            <meta property="twitter:description" content={props.pageDescription}/>
            <meta property="twitter:image" content={props.metaImage}/>
        </Helmet>
    </>
  );

  export default HelmetMeta;

//   let pageName = "";
//   let pageDescription = "";
//   let pageLink = "";
//   let metaImage = "";
