import React from "react";
import Clearfix from './Clearfix';
import PreHead from './PreHead';
import Btn from './Btn';
import DangerHuskie from '../json/DangerHuskie';
import Basiccard from './Basiccard';

let lasthuskie = [DangerHuskie.length];
let threehuskie = [DangerHuskie.length - 3];

const BlockVectorIllos = () => (
    <section id="dangerhuskiedesigns">
            <div className="sectionWrapper">
                <PreHead
                    prehead="Explore more from the Danger Huskie Danger Team"
                    haitch2="Danger Huskie"
                />
                <p>Dive deep into danger!</p>
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
                    />
                }).reverse()}
                    <Clearfix />
                </div>
                <div className="view-more-container_series">
                    <Btn
                        btnlink="/works"
                        variant="btn-secondary-red btn"
                        content="Danger Team GO"
                    />
                </div>
                <Clearfix />
            </div>
        </section>
);

export default BlockVectorIllos;