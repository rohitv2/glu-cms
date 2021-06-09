import React from 'react';
import ReviewBox from './ReviewBox';
import StarIcon from '@material-ui/icons/Star';
const About: React.FunctionComponent = () => {
    return (
        <div className="review__container">
            <div className="heading__box">
                <h2>Reviews (136)</h2>
                <div className="review__box">
                    <StarIcon className="icon" />
                    <h3>2/5</h3>
                </div>
            </div>
            <ReviewBox className="1" />
            <ReviewBox className="1" />
            <ReviewBox className="1" />
        </div>
    );
};

export default About;
