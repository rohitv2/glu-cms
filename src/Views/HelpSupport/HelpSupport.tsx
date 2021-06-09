import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ManageAccount from './ManageAccount';
import Individual from './Individual';
import ProfileSetting from './ProfileSetting';
import VideoLectureContainer from '../../components/VideoLectureContainer';
import PageFooter from '../../components/PageFooter';

const HelpSupport: React.FunctionComponent = () => {
    return (
        <NavigationMenu>
            <div className="help__support__container">
                <ManageAccount />
                <hr className="line" />
                <Individual />
                <VideoLectureContainer />
                <ProfileSetting />
                <div className="commonFooter">
                    <PageFooter padding={false} />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default HelpSupport;
