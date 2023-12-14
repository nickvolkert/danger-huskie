import React from "react";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import Hero from "../../components/Hero";
import BodyClassName from "react-body-classname";
import Clearfix from "../../components/Clearfix";
import DangerHuskie from "../../json/DangerHuskie.json";
import CoreSite from "../../json/CoreSite.json";
import HelmetMeta from "../../components/HelmetMeta";

let source = DangerHuskie;
let x = 6;
let y = 4; //Happy Rainbow

let pagename = CoreSite[x].title;
let subhead = CoreSite[x].heading;
let metadescription = CoreSite[x].description;
let pagelinkurl = CoreSite[x].link;
let metaimageurl = CoreSite[x].image;
let altmeta = CoreSite[x].alttext;
let pageheadtags = CoreSite[x].tags;

const News = () => (
    <div id="news-landing">
        <HelmetMeta 
            pageName={pagename}
            pageSubhead = {subhead}
            pageDescription={metadescription}
            pageLink={pagelinkurl}
            metaImage={metaimageurl}
            altText={altmeta}
            pageTags={pageheadtags}
        />
    <BodyClassName className="newslanding"></BodyClassName>
    <Hero
            heroClass="-news"
            heroH1={pagename}
            heroImage={source[y].image}
            heroDescription={source[y].title}
            heroLink={source[y].link}
        />
    <Content>
        <div id="breadcrumb">
                <ul>
                    <li><Link to="/" className="breadcrumb-home">Home</Link></li>
                    <li className="breadcrumb-divider">/</li>
                    <li>{pagename}</li>
                </ul>
            </div>
    </Content>

    <section>
        <Content>
            
            <div id="news-body" className="body-copy">

                {/* 17 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[37].link}>
                                <img src={DangerHuskie[37].preview} title={DangerHuskie[37].title} alt={DangerHuskie[37].alttext} />
                            </Link>
                        </div>
                        <p className="caption">Such a grand and lush leafy mullet on this little guy...</p>
                    </div>
                    <div className="rightRail">
                        <h2>Mullet lovers say hey!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: December 14th, 2023</p>
                        <p>DANGER TEAM: Mullets aren't just for people, the little logs in the forest are still rocking them too!</p>
                        <p><Link to={DangerHuskie[37].link}>Check out {DangerHuskie[37].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 16 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[36].link}>
                                <img src={DangerHuskie[36].preview} title={DangerHuskie[36].title} alt={DangerHuskie[36].alttext} />
                            </Link>
                        </div>
                        <p className="caption">A man with a Jack O'Lantern head!</p>
                    </div>
                    <div className="rightRail">
                        <h2>One last one for Spooky Season...</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: November 25th, 2023</p>
                        <p>DANGER TEAM: One last entry for spooky season, even though it's arguably over and then some, but hey, no snow on the ground yet! Jack O'Lanterns ride one last time!</p>
                        <p><Link to={DangerHuskie[36].link}>Check out {DangerHuskie[36].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 15 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[35].link}>
                                <img src={DangerHuskie[35].preview} title={DangerHuskie[35].title} alt={DangerHuskie[35].alttext} />
                            </Link>
                        </div>
                        <p className="caption">An Evil Eye lurking in a cape!</p>
                    </div>
                    <div className="rightRail">
                        <h2>The cape adds to the evil...</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: November 21st, 2023</p>
                        <p>DANGER TEAM: The Evil Eye is dressed up and in a three piece donning a cape; it just adds to the evilness!</p>
                        <p><Link to={DangerHuskie[35].link}>Check out {DangerHuskie[35].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 14 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[34].link}>
                                <img src={DangerHuskie[34].preview} title={DangerHuskie[34].title} alt={DangerHuskie[34].alttext} />
                            </Link>
                        </div>
                        <p className="caption">An evil eye is on the prowl!</p>
                    </div>
                    <div className="rightRail">
                        <h2>Evil ideas incoming...</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: November 18th, 2023</p>
                        <p>DANGER TEAM: The Evil Eye is here and, uh oh, has just been struck with an evil eye-dea! GET IT?!</p>
                        <p><Link to={DangerHuskie[34].link}>Check out {DangerHuskie[34].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 13 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[33].link}><img src={DangerHuskie[33].preview} title={DangerHuskie[33].title} alt={DangerHuskie[33].alttext} /></Link>
                        </div>
                        <p className="caption">Mustache gang doing a twirl on their superb 'staches.</p>
                    </div>
                    <div className="rightRail">
                        <h2>Mo staches in November</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: November 11th, 2023</p>
                        <p>DANGER TEAM: If you find yourself in the forest you may find yourself in a lowkey competition to see whom has the crispest mustache. Best come prepared!</p>
                        <p><Link to={DangerHuskie[33].link}>Check out {DangerHuskie[33].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 12 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[32].link}><img src={DangerHuskie[32].preview} title={DangerHuskie[32].title} alt={DangerHuskie[32].alttext} /></Link>
                        </div>
                        <p className="caption">If your local friendly log waves, you best wave back!</p>
                    </div>
                    <div className="rightRail">
                        <h2>New work coming in "waves"...</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: November 7th, 2023</p>
                        <p>DANGER TEAM: It's been a minute but I'm back from a tour of the local forest and have to report and record on all the interesting logs I've found! Starting with the waving {DangerHuskie[32].title}!</p>
                        <p><Link to={DangerHuskie[32].link}>Check out {DangerHuskie[32].title} here!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 11 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[31].link}><img src={DangerHuskie[31].preview} title={DangerHuskie[31].title} alt={DangerHuskie[31].alttext} /></Link>
                        </div>
                        <p className="caption">Chicago Proud, no matter what air quality!</p>
                    </div>
                    <div className="rightRail">
                        <h2>Chicago Dog reporting in!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: June 27th, 2023</p>
                        <p>Summer is here, but this Chicago Dog still has his stocking cap on, just in case, who knows with this air quality thing. Despite all that, long live CHICAGO.</p>
                        <p><Link to={DangerHuskie[31].link}>Check out {DangerHuskie[31].title}</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 10 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[9].link}><img src={DangerHuskie[9].preview} title={DangerHuskie[9].title} alt={DangerHuskie[9].alttext} /></Link>
                        </div>
                        <p className="caption">And a Happy New Year to you!</p>
                    </div>
                    <div className="rightRail">
                        <h2>Happy Vector New Year!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: January 1st, 2023</p>
                        <p>It's a New Year! On behalf of myself and the Chicago Dog, I wanted to wish you all a happy and safe 2023!</p>
                        <p><Link to={DangerHuskie[9].link}>Check out {DangerHuskie[9].title}</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>


                {/* 09 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[28].link}><img src={DangerHuskie[28].preview} title={DangerHuskie[28].title} alt={DangerHuskie[28].alttext} /></Link>
                        </div>
                        <p className="caption">A little cold, but still spooky</p>
                    </div>
                    <div className="rightRail">
                        <h2>Chica-GHOST</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: October 9th, 2022</p>
                        <p>Halloween MONTH. Check out this new spectre, the Chicaghost. A bit chilly, but still super spooky.</p>
                        <p><Link to={DangerHuskie[28].link}>Check out {DangerHuskie[28].title}</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 08 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[27].link}><img src={DangerHuskie[27].preview} title={DangerHuskie[27].title} alt={DangerHuskie[27].alttext} /></Link>
                        </div>
                        <p className="caption">HAIL TRUE METAL!</p>
                    </div>
                    <div className="rightRail">
                        <h2>The HORNS</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: October 2nd, 2022</p>
                        <p>Been a bit. Halloween MONTH is in effect so are some new DangerHuskie works!</p>
                        <p><Link to={DangerHuskie[27].link}>Check out The Horns!</Link></p>
                        <p><Link to="/works/">Check out ALL my latest works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>

                {/* 07 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <Link to={DangerHuskie[25].link}><img src={DangerHuskie[25].preview} title="Bigfoot series WIP" alt="First print of the Year! South Side Dog by DangerHuskie" /></Link>
                        </div>
                        <p className="caption">First print of the year!</p>
                    </div>
                    <div className="rightRail">
                        <h2>South Side Dog!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: April 26th, 2022</p>
                        <p>It's been too long! Here's the South Side Dog, my first print of the year! Available as stickers, tees, patterns and more!</p>
                        <p><Link to={DangerHuskie[25].link}>Check out The South Side Dog here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                
                {/* 06 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <a href="https://dribbble.com/shots/17274684-WIP-Annoyed-Bigfoot" rel="noopener noreferrer" target="_blank"><img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/news_wip-bigfoot.jpg" title="Bigfoot series WIP" alt="WIP of a new Bigfoot series by DangerHuskie" /></a>
                        </div>
                        <p className="caption">Annoyed Bigfoot WIP</p>
                    </div>
                    <div className="rightRail">
                        <h2>Updated Annoyed Bigfoot WIP!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: January 14th, 2022</p>
                        <p>New bigfoot (or sasqutach if ya fancy) series in the works on here. Check back soon for vector-y goodness.</p>
                        <p><a href="https://dribbble.com/shots/17274684-WIP-Annoyed-Bigfoot" rel="noopener noreferrer" target="_blank">Check out this WIP on my dribbble!</a></p>
                        <p><Link to="/works/">Check my current works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 05 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <a href="https://dribbble.com/shots/17249709-WIP-Annoyed-Yetis" rel="noopener noreferrer" target="_blank"><img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/news_wip-yeti.jpg" title="Yeti WIP" alt="WIP of a new Yeti series by DangerHuskie" /></a>
                        </div>
                        <p className="caption">Yeti series WIP</p>
                    </div>
                    <div className="rightRail">
                        <h2>Yeti Series WIP!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: January 11th, 2022</p>
                        <p>Annoyed Yeti? Yeah went back to the drawing board on this cryptid and updated the design.</p>
                        <p><a href="https://dribbble.com/shots/17249709-WIP-Annoyed-Yetis" rel="noopener noreferrer" target="_blank">Check out this WIP of an upcoming series of annoyed crytpids on my dribbble!</a></p>
                        <p><Link to="/works/">Check my current works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 04 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                        <a href="https://dribbble.com/shots/17200075-DH-Log-Series-WIP" rel="noopener noreferrer" target="_blank"><img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/news_wip-logs.jpg" title="Logs WIP" alt="WIP of a new Log series by DangerHuskie" /></a>
                        </div>
                        <p className="caption">Log series WIP</p>
                    </div>
                    <div className="rightRail">
                        <h2>Log Series WIP!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: January 4th, 2022</p>
                        <p>Hard at work on new items for DangerHuskie. These two handsome duders are a part of a vector log series I'm working on!</p>
                        <p><a href="https://dribbble.com/shots/17200075-DH-Log-Series-WIP" rel="noopener noreferrer" target="_blank">Check out DangerHuskie out the full shot on my dribbble!</a></p>
                        <p><Link to="/works/">Check my current works here!</Link></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 03 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <a href="https://www.pinterest.com/dangerhuskie/pins/" rel="noopener noreferrer" target="_blank"><img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/pinterest-dangerhuskie.jpg" title="DangerHuskie on Pinterest" alt="Account snap of DangerHuskie on Pinterest" /></a>
                        </div>
                        <p className="caption">DangerHuskie on Pinterest</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie on Pinterest!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: June 26th, 2021</p>
                        <p>DangerHuskie has an account is posting away on Pinterest.</p>
                        <p><a href="https://www.pinterest.com/dangerhuskie/pins/" rel="noopener noreferrer" target="_blank">Check out DangerHuskie out on Pinterest!</a></p>
                        <p><Link to="/works/">Check my works</Link> direct pin to a work!</p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 02 */}
                <div className="news-entry">
                    <div className="leftRail">
                        <div className="leftRailImage">
                            <a href="https://www.designbyhumans.com/shop/dangerhuskie/" rel="noopener noreferrer" target="_blank"><img src="https://nickvolkert.sirv.com/dangerhuskie/site-graphics/blog/dbhstore.png" title="DangerHuskie on DBH" alt="Storefront fo DangerHuskie on DBH" /></a>
                        </div>
                        <p className="caption">DangerHuskie on DBH</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie on DBH</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: October 22nd, 2020</p>
                        <p>DangerHuskie is set up to sell on Design By Humans! Tees, mugs, stickers and mousepads for sale.</p>
                        <p><Link to="/works/">Check my works</Link> to link to my DBH store by designs.</p>
                        <p>Or check <a href="https://www.designbyhumans.com/shop/dangerhuskie/" rel="noopener noreferrer" target="_blank">DangerHuskie out on DBH here!</a></p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
                {/* 01 */}
                <div className="news-entry">
                    <div id="launch-image" className="leftRail">
                        <div id="launch-dangerhuskie" className="leftRailImage">
                            <span>Danger Huskie Logo</span>
                        </div>
                        <p className="caption">DangerHuskie logo, September, 2020.</p>
                    </div>
                    <div className="rightRail">
                        <h2>DangerHuskie is a GO!</h2>
                        <div className="pipe"></div>
                        <div className="news-entry-text">
                        <p>Date: September 31st, 2020</p>
                        <p>DangerHuskie is now live! Thanks for visting and check back soon with a LOT of art updates!</p>
                        <p>~ Danger Nick</p>
                    </div>
                    </div>
                    <Clearfix />
                </div>
            </div>
        </Content>
        <Clearfix />
    </section>
    </div>
    );

export default News;