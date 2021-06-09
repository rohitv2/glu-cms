import React from 'react';
import { Typography } from '@material-ui/core';
import TitleSubtitle from '../../components/TitleSubtitle';
import HorizontalLine from '../../components/HorizontalLine';

interface props {
    date?: string;
    image?: string;
    titleOne?: React.ReactNode;
    titleTwo?: React.ReactNode;
    subtitleOne?: string;
    subtitleTwo?: string;
    showLine?: boolean;
    showFullLine?: boolean;
}
const DateTimeTitile: React.FunctionComponent<props> = ({
    date,
    image,
    titleOne,
    titleTwo,
    subtitleOne,
    subtitleTwo,
    showLine,
    showFullLine,
}) => {
    return (
        <div className="next__wrapper">
            <div className="row">
                <div className="col-lg-5 mb-5">
                    <div className="next__wrapper__image__text">
                        <div className="next__wrapper__image__text__left">
                            <Typography className="text">{date}</Typography>
                        </div>
                        <div className="next__wrapper__image__text__right">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 mb-5">
                    <div className="next__wrapper__right__part">
                        <TitleSubtitle title={titleOne} subtitle={subtitleOne} />
                        <TitleSubtitle title={titleTwo} subtitle={subtitleTwo} />
                    </div>
                </div>
                {showLine && (
                    <div style={{ paddingLeft: showFullLine ? 0 : '20.5%' }} className="divider__line">
                        <HorizontalLine />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DateTimeTitile;
