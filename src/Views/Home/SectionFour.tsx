import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

interface props {
    imageOne: string;
    imageTwo: string;
    msg: string;
    show: boolean;
    text: string;
}
const SectionFour: React.FunctionComponent<props> = ({ imageOne, imageTwo, msg, show, text }) => {
    return (
        <div className="section-four">
            <div className="row make__col__reverse">
                <div className="col-md-6 col-lg-6">
                    <div className="short-hair-girl-container">
                        <img className="short-hair-girl" src={imageOne} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="section-four-right-part-container">
                        <Typography className="title">{msg}</Typography>
    <Typography className="real-time-intraction shift__mobile">{text}</Typography>
                        {/* {show && (
                            <>
                                <img className="board-icon" src={commonImg.whiteBoardSvg} />
                            </>
                        )} */}
                        <img className="lappy-girl" src={imageTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
