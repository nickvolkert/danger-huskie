import React from "react";
import DangerHuskieIllo from "../../components/DangerHuskieIllo";
import DangerHuskie from "../../json/DangerHuskie.json";
import NextandPrev from "../../json/NextandPrev.json";
import NextPrev from "../../components/NextPrev";
import BlockVectorIllos from "../../components/BlockVectorIllos";

let y = 7;
let prev = y - 1;
let next = 0;
let source = DangerHuskie;

const Calendar2020 = () => (
    <div id="danger-huskie-illo">
        <DangerHuskieIllo
                illoID={source[y].id}
                illoImage={source[y].image}
                illoTitle={source[y].title}
                illoLink={source[y].link}
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
                illoBackgroundType={source[y].backgroundtype}
            />
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

export default Calendar2020;