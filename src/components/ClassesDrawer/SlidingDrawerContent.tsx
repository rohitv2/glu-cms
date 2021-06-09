import React from 'react';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import IconTextRow from '../../components/IconTextRow';
import { FavoriteBorder } from '@material-ui/icons';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import './style.scss';

const SlidingDrawerContent: React.FunctionComponent = () => {
    return (
        <div className="drawer__content">
            <div className="row">
                <div className="col-md-8 slider-image-container">
                    <img src={commonImg.boyReadingFromLaptop} alt="" />
                </div>
            </div>
            <div className="image__bottom__content">
                <Typography className="title">Introducing advanced long devision</Typography>
                <div className="icon__text__container">
                    <div className="favorite">
                        <IconTextRow  icon={<FavoriteBorder className="icon" />} title="Favorite" />
                    </div>
                    <div className="available__slots">
                        <IconTextRow icon={<PermIdentityIcon className="icon" />} title="6 Available slots" />
                    </div>
                </div>
                <div className="time__teacher__container">
                    <Typography className="heading">
                    19/07/20 <br/> 45mins
                    </Typography>
                    <Typography className="heading">
                        Maths <br />Frankie Smith
                    </Typography>
                </div>

                <div className="child__purchase__item">
                    <div className="child__purchase">
                        <div className="child">
                            <Typography className="subtitle">Child 1</Typography>
                            <Typography variant="h5">
                                <ExpandMoreIcon 
                                    style={{fontSize:"3rem"}} />
                            </Typography>
                        </div>
                        <div className="purchase"><Typography className="subtitle">Purchase</Typography></div>

                    </div>

                    <div className="item">
                        <Typography className="subtitle">AED100</Typography>
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
