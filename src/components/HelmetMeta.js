import React from "react";
import {Helmet} from "react-helmet";

let domain = "https://dangerhuskie.com";
let me = " | DangerHuskie by Nick Volkert";

const HelmetMeta = props => (
    <>
        <Helmet>
            <title>{props.pageName + me}</title>
            <link rel="canonical" href={domain + props.pageLink} />
            <meta name="title" content={props.pageName + me} />
            <meta name="keywords" content={props.pageTags} />
            <meta name="description" content={props.illoDescription} />
            <meta property="og:description" content={props.illoDescription} />
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="DangerHuskie" />

            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content={domain + props.pageLink} />
            <meta property="og:title" content={props.pageName + me}/>
            <meta property="og:description" content={props.illoDescription}/>
            <meta property="og:image" content={props.metaImage}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={domain + props.pageLink}/>
            <meta property="twitter:title" content={props.pageName + me}/>
            <meta property="twitter:description" content={props.illoDescription}/>
            <meta property="twitter:image" content={props.metaImage}/>
            <meta name="twitter:image:alt" content={props.illoAlt} />
        </Helmet>
    </>
  );

  export default HelmetMeta;
