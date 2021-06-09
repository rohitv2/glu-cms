import React from 'react';
import IndividualSubjectPageContainer from '../../Containers/Pages/IndividualSubjectPageContainer';
import {
    bannerCards3,
    recommendedCards,
    recommendedCards2,
    tutorCards,
} from '../../data/homepage';

const Index: React.FunctionComponent = () => {
    return (
        <IndividualSubjectPageContainer
            userType="parent"
            cardsData={{
                whiteBannerCard: {
                    subject: 'Maths.',
                    tutorsCount: 143,
                    classesCount: 2508,
                },
                nextClass: {
                    img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/jump_frcudj.jpg',
                    date: '19/07/20',
                    startTime: '9am',
                    endTime: '10.15am',
                    subject: 'PE.',
                    description: 'Creating a running',
                    subTitle: '75mins',
                    name: 'Harriet Earl',
                },
                featuredSubjects: {
                    imgBigTitle: 'Business Studies Individual',
                    imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607716/chairwithman_p09ojq.jpg',
                    imgSmallTitle: 'Computer Science',
                    imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/vrplayerboy_fyrdco.jpg',
                },
                recordedClasses: recommendedCards,
                upcomingClass: {
                    img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg',
                    date: '24/07/20',
                    startTime: '3pm',
                    endTime: '4.30pm',
                    subject: 'English.',
                    description: 'How to structure',
                    name: 'Jeff Lee',
                    subTitle: 'AED200',
                },
                liveClasses: recommendedCards2,
                featuredTutors: {
                    imgSmallTitle: 'Maths - Harry Stannard',
                    imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607714/blueshirtman_gkcohw.jpg',
                    imgBigTitle: 'Languages - Johny Duke',
                    imgBig:
                        'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607729/smillingmanspects_qewo8x.jpg',
                },
                bannerCarouselBottom: bannerCards3,
                tutors: tutorCards,
            }}
        />
    );
};

export default Index;
