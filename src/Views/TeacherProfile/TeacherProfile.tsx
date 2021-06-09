import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { commonImg } from '../../Assets/images';
import CardContainer from '../../Containers/Cards/CardContainer';
import BoxContainer from '../../components/Dashobard/BoxContainer';
import Contact from './Contact';
import Introduction from './Introduction';
import SkillContainer from './SkillContainer';

const TeacherProfile: React.FunctionComponent = () => {
    return (
        <CardContainer>
            <div className="profile-wrapper">
                <div className="row">
                    <div className="col-lg-2 mb-4">
                        <Avatar src={commonImg.photo} style={{ width: '8rem', height: '8rem' }} />
                    </div>
                    <div className="col-lg-10">
                        <Contact/>
                        <div className="divider"></div>
                       <Introduction/>
                       <SkillContainer title="Skills"/>
                        <BoxContainer heading="Education" title="PHD in Geological Physics, University of California" />
                        <BoxContainer heading="Designation & Department" title="Senior Faculty, Science" />
                        <BoxContainer heading="Contact Number" title="+97-3700288929" />
                        <BoxContainer heading="Date of Joining" title="July 30, 2018" />
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default TeacherProfile;
