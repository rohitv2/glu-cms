import React from 'react';
import SemiBox from './SemiBox';
const Education: React.FunctionComponent = () => {
    return (
        <div className="Education__box">
            <div className="middle__Education">
                <h2>Education</h2>
            </div>
            <div className="para__box">
                <SemiBox
                    heading="Current Education"
                    sub1="Dane Court Grammar "
                    sub2=" A-Level"
                    sub3=" Maths, English, ICT"
                />
                <SemiBox heading="Previous Education" sub1="GEMS School" sub2="GCSE" sub3="English, Maths, French" />
            </div>
        </div>
    );
};

export default Education;
