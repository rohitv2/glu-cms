import React from 'react';
import ReusableUpcommingClasses from '../../components/ReusableUpcommingClasses';
import commonImg from '../../Assets/images';
 
const UpcomingClasses = () => {
    return (
            <ReusableUpcommingClasses
                image={commonImg.twogirl}
                titleClass="Upcomming Class"
                titleLeft={
                <>
                    24/07/20 <br /> 3pm- 4.30pm
                </>
                }
                titleRight={
                <>
                    English.<br />  How to structure <br /> narrative in fiction <br /> 
                </>
                }
                subtitleLeft="AED200"
                subtitlteRight="Jeff Lee"
            />

    );
}

export default React.memo(UpcomingClasses);
