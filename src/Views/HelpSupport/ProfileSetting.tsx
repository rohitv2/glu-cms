import React from 'react';
import { Typography } from '@material-ui/core';
import TitleDescription from './TitleDescription';

const ProfileSetting = () => {
    return (
        <div className="profile-container">
            <div className="individual__container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="find__container">
                            <Typography className="title">Can’t find the answer?</Typography>
                            <Typography className="title">
                                Email <span>hello@glulearning.com</span>
                            </Typography>
                            <Typography className="title">
                                Phone <span>+971 4 554 0350</span>
                            </Typography>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <TitleDescription
                            rowNo="02"
                            title="Setting up a profile"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                        />
                        <TitleDescription
                            rowNo="03"
                            title="Choosing subjects"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetting;
