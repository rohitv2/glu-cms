import React from 'react';
import { Typography } from '@material-ui/core';
interface props {
    type?: string;
    typeName?: string;
    review?: string;
    rating?: string;
    subject?: string;
    desc?: string;
}
const ReviewRatingList: React.FunctionComponent<props> = ({ type, typeName, review, rating, subject, desc }) => {
    return (
        <>
            <div className="row">
                <div className="col-5">
                    <Typography className="container5_card_text">{`${typeName}, ${type}`}</Typography>
                    <div className="star_rating_row">
                        <div>
                            <svg
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 16 16"
                                className="bi bi-star-fill"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <Typography className="rating_text">{`${rating}/5`}</Typography>
                    </div>
                </div>
                <div className="col-7">
                    <Typography className="container5_card_text">{review}</Typography>
                    <Typography className="container5_card_text">{subject}</Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="paratext_wrapper">
                        <Typography className="container5_card_desc_text">{desc}</Typography>
                    </div>
                    <div className="parasmalltext_wrapper">
                        <Typography className="container5_card_desc_smalltext">Challenge</Typography>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ReviewRatingList;
