import React from 'react';
import commonImg from '../../Assets/images';
import ReusableUpcommingClasses from '../../components/ReusableUpcommingClasses';

const LiveClassesPartSec = () => {
    return (
        <div className="teacher__container">
            <ReusableUpcommingClasses
            image={commonImg.twogirlsideview}
            titleClass="Upcomming Class"
            titleLeft={
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            }
            titleRight={
                <>
                    English. <br/> How to structure <br/> narrative in fiction
                </>
            }
            subtitleLeft="AED200"
            subtitlteRight="Jeff Lee"
        />
        </div>
    );
};

export default  React.memo(LiveClassesPartSec);
