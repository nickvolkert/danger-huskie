import React from "react";
import Clearfix from './Clearfix';
import Btn from './Btn';
import DangerHuskie from '../json/DangerHuskie';
import Basiccard from './Basiccard';

let lasthuskie = [DangerHuskie.length];
let threehuskie = [DangerHuskie.length - 3];

const BlockVectorIllos = () => (
    <section id="relatedDesigns">
            <div className="sectionWrapper">
                <h2>More Danger Awaits</h2>
                <div className="projectrow">
                {DangerHuskie.slice(threehuskie, lasthuskie).map((postDetail) => {
                    return <Basiccard
                        key={postDetail.id}
                        cardLink={postDetail.link}
                        cardID={postDetail.component}
                        cardImage={postDetail.preview}
                        cardAlt={postDetail.alttext}
                        cardimageTitle={postDetail.title}
                        cardDate={postDetail.date}
                        cardDescription={postDetail.description}
                        cardBackground={postDetail.backgroundcolor}
                    />
                }).reverse()}
                    <Clearfix />
                </div>
                <div className="view-more-container_series">
                    <Btn
                        btnlink="/works/"
                        variant="btn-primary btn"
                        content="View More"
                    />
                </div>
                <Clearfix />
            </div>
        </section>
);

export default BlockVectorIllos;