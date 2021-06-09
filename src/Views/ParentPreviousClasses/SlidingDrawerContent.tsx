import React from 'react';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import IconTextRow from '../../components/IconTextRow';
import { FavoriteBorder } from '@material-ui/icons';

const SlidingDrawerContent: React.FunctionComponent = () => {
    return (
        <div className="drawer__content">
            <div className="row">
                <div className="col-md-8 slider-image-container">
                    <img src={commonImg.boywithdad} alt="" />
                </div>
            </div>
            <div className="image__bottom__content">
                <Typography className="title">How to structure narrative in fiction</Typography>
                <div className="icon__text__container">
                    <IconTextRow icon={<FavoriteBorder className="icon" />} title="Favorite" />
                </div>
                <div className="time__teacher__container">
                    <Typography className="heading">
                    19/07/20 <br/> 45mins
                    </Typography>
                    <Typography className="heading">
                        Maths <br />Esme Stannard
                    </Typography>
                </div>
                {/* <div className="chip__container">
                    <Typography className="title">AED250</Typography>
                </div> */}
                <div className="child__purchase__item">
                            <div className="child__purchase" style={{width:"7.75rem"}}>
                                <div className="purchase" style={{cursor: "pointer", borderLeft:"none"}}><Typography className="subtitle" >Watch</Typography></div>
                            </div>
                        </div>
                <div className="description__container">
                    <Typography className="title">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. <br /> <br /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua.
                    </Typography>
                    <Typography className="read__more">Read More</Typography>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SlidingDrawerContent);
