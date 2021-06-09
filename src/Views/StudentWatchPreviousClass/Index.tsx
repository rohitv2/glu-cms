import React, { useEffect, useState } from 'react';
import SlidingDrawerContent from '../UpcomingClasses/SlidingDrawerContent';
import NavigationMenu from '../../components/NavigationMenu';
import SpaceWrapper from '../../Containers/SpaceWrapper';
import VideoDescription from './VideoDescription';
import VideoLectureContainer2 from '../../components/VideoLectureContainer2';
import ClassSummery from './ClassSummery';
import TagContainer from './TagContainer';
import ResourcesContainer from './ResourcesContainer';
import WatchNext from './WatchNext';
import MadeBy from '../Footer/MadeBy';
import { studentMenus } from '../../Helper/studentMenus';
import {  useLocation } from 'react-router';

const Index = () => {
    const history = useLocation();
    const [specificData, setSpecificData] = useState<any>();
    const [fullData, setFullData] = useState<any>();
    const [resourceArray, setResourceArray] = useState<any>([]);

    useEffect(() => {
        if ((history as any)?.state?.specData) {
            setSpecificData((history as any)?.state?.specData);
            setFullData((history as any)?.state?.fullData);
        }
    }, []);
    useEffect(() => {
        if (specificData) {
            const resourceData = [
                {
                    resource: specificData?.resource,
                    title: specificData?.subjectName,
                    subtitle: 'Download',
                },
            ];
            setResourceArray(resourceData);
        }
    }, [specificData]);
    const handleClick = () => {
        if (specificData?.row < fullData.length - 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSpecificData(fullData[specificData.row + 1]);
        }
    };
    return (
        <NavigationMenu
            menuList={studentMenus}
            menuDrawerWidth="65vw"
            menuDrawerAnimation={false}
            MenuDrawerComponent={<SlidingDrawerContent />}
        >
            <div className="student__classes__tutor">
                <SpaceWrapper>
                    <React.Fragment>
                        <div className="video__info__container">
                            <VideoDescription
                                sessionName={specificData && specificData.sessionName}
                                subject={specificData && specificData.subjectName}
                                name={`${specificData && specificData.teacherName}`}
                            />
                            <VideoLectureContainer2 link={specificData && specificData.link} />
                            <ClassSummery description={specificData && specificData.description} />
                            <TagContainer subjects={specificData && specificData.tags} />
                            <ResourcesContainer resource={resourceArray} />
                            {specificData && specificData.row < fullData.length - 1 ? (
                                <WatchNext handleClick={handleClick} nextWatch={fullData[specificData.row + 1]} />
                            ) : (
                                ''
                            )}
                        </div>
                        <MadeBy />
                    </React.Fragment>
                </SpaceWrapper>
            </div>
        </NavigationMenu>
    );
};

export default Index;
