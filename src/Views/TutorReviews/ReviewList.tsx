import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import AddCancelButton from '../TutorAvailablity/AddCancelButton';

interface props {
    type?: string;
    typeName?: string;
    review?: string;
    rating?: string;
    subject?: string;
    desc?: string;
}
const ReviewList: React.FunctionComponent<props> = ({ type, typeName, review, rating, subject, desc }) => {
    const [toggle, setToggle] = useState(false);
    const [isSubmit,setisSubmit]=useState(false);
    const onSubmit=()=>{
        setisSubmit(true);
    }
    return (
        <>
            <div className="reusable_month_desc_list">
                <div className="tutor_review_details">
                    <div className="details1">
                        <Typography className="tutor_review_smalltext">{`${typeName} ,${type}`}</Typography>
                        <span className="star_rating_flex">
                            <div className="svg_star">
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-star-fill"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <Typography className="tutor_review_smalltext">{`${rating}/5`}</Typography>
                        </span>
                    </div>
                    <div className="details2">
                        <Typography className="tutor_review_smalltext">{review}</Typography>
                        <Typography className="tutor_review_smalltext">{subject}</Typography>
                    </div>
                    <div className="details3">
                        <div className="tutor_review_challenge" onClick={() => setToggle(true)}>
                            {!toggle && <Typography className="tutor_review_challenge_text">Challenge</Typography>}
                        </div>
                    </div>
                </div>
                <div className="tutor_review_description">
                    <Typography className="tutor_review_description_text">{desc}</Typography>
                </div>
                {(toggle&&!isSubmit)&&<div className="showOnToggle">
                    <div className="tutor_challenge_review">
                        <Typography className="tutor_review_smalltext">Challenge</Typography>
                        <textarea rows={5} style={{ width: '100%' }} />
                    </div>
                    <AddCancelButton firstButton={'Submit'} secondButton={'Cancel'} clickHandler={()=>onSubmit()} />
                </div>}
                {isSubmit&&<div className="tutor_challenge_submitted">
                    <Typography className="tutor_review_smalltext">Challenge submitted.<br></br> We will be in contact to resolve this soon.</Typography>
                </div>}
            </div>
        </>
    );
};
export default ReviewList;
