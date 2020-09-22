import React from "react";
import DangerHuskieIllo from "../../components/DangerHuskieIllo";
import Content from "../../components/Content"
import DangerHuskie from "../../json/DangerHuskie.json";
import NextandPrev from "../../json/NextandPrev.json";
import NextPrev from "../../components/NextPrev";
import BlockVectorIllos from "../../components/BlockVectorIllos";

let y = 3;
let prev = y - 1;
let next = y + 1;
let source = DangerHuskie;

const VarsityPumpkin = () => (
    <div id="danger-huskie-illo">
        <Content>
        <DangerHuskieIllo
                illoImage={source[y].image}
                illoTitle={source[y].title}
                illoAlt={source[y].alttext}
                illoDate={source[y].date}
                illoDescription={source[y].description}
                Redbubble={source[y].redbubble}
                Society6={source[y].society6}
                Dbh={source[y].designbyhumans}
                TeePublic={source[y].teepublic}
                Threadless={source[y].threadless}
                Teespring={source[y].teespring}
                DeviantArt={source[y].deviantart}
                Tumblr={source[y].tumblr}
                illoTags={source[y].tags}
                illoBackGroundColor={source[y].backgroundcolor}
            />
        </Content>
        <NextPrev
            prevLink={source[prev].link}
            prevImage={source[prev].preview} 
            prevAlttext={source[prev].alttext}
            prevTitle={source[prev].title}
            prevLinkText={NextandPrev[0].prev}

            nextLink={source[next].link}
            nextImage={source[next].preview} 
            nextTitle={source[next].title}
            nextAlttext={source[next].alttext}
            nextLinkText={NextandPrev[0].next}
            />
        <BlockVectorIllos/>
    </div>
    );

export default VarsityPumpkin;