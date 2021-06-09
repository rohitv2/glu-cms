import React from 'react';
import StarIcon from '@material-ui/icons/Star';
interface props {
    className: string;
}
const ReviewBox: React.FunctionComponent<props> = ({ className }) => {
    return (
        <div className={`para__box ${className}`}>
            <h2 className="title">Jonathan Holmes</h2>
            <div className="review__box">
                <StarIcon />
                <h3>2/5</h3>
            </div>
            <p className="para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua…
            </p>
            <h4 className="read">Read more</h4>
        </div>
    );
};

export default ReviewBox;
