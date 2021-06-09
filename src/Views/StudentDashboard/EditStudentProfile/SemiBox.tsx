import React from 'react';

interface props {
    heading: string;
    sub1: string;
    sub2: string;
    sub3: string;
}
const SemiBox: React.FunctionComponent<props> = ({ heading, sub1, sub2, sub3 }) => {
    return (
        <div className="semi__box">
            <div className="heading">
                <h2>{heading}</h2>
                <div>
                    <p className="btn">Edit</p>
                    <p className="btn">Delete</p>
                </div>
            </div>
            <p className="para">
                {sub1}
                <br />
                {sub2},
                <br />
                {sub3}
            </p>
        </div>
    );
};

export default SemiBox;
