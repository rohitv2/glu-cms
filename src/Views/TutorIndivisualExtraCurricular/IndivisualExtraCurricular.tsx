import React from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ExtraCurricularBanner from './ExtraCurricularBanner';
import BigBanner from '../../components/BigBanner';
import {Link} from 'react-router-dom';
import TagsContainer from '../../components/TagsContainer';
import ReviewRatingList from './ReviewRatingList';
import PageFooter from '../../components/PageFooter'
import PlayBanner from '../../components/PlayBanner';
import useMenuList from '../../Hooks/useMenuList';
const menu = useMenuList('tutor')
const ArrayTags = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
const ReviewListArray = [
    {
        typeName: 'Jonathan Lee',
        type: 'Student',
        rating: '4',
        review: 'How To Structure narrative',
        subject: 'English',
        desc:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
    {
        typeName: 'Jonathan Lee',
        type: 'Student',
        rating: '4',
        review: 'How To Structure narrative',
        subject: 'English',
        desc:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
    {
        typeName: 'Jonathan Lee',
        type: 'Student',
        rating: '4',
        review: 'How To Structure narrative',
        subject: 'English',
        desc:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
    {
        typeName: 'Jonathan Lee',
        type: 'Student',
        rating: '4',
        review: 'How To Structure narrative',
        subject: 'English',
        desc:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
];
const resourcesArray=[
    {
        title:"Hawk: Occupation: Skateboarder",
        subtitle:"Download"
    },
    {title:"Book Of Tricks",
    subtitle:"Download"
}
]
const IndivisualExtraCurricular: React.FunctionComponent = () => {
    return (
        <div className="tutor_indivisual_extra_curr_main">
             <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="secondary">
                <ExtraCurricularBanner />
                <div className="tutor_indivisual_extra_curr_container2">
                    <BigBanner
                        heading={'Class Today'}
                        description={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.'
                        }
                    />
                </div>
                <div className="tutor_indivisual_extra_curr_container3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0"></div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="extra_curricular_tagContainer">
                                    <TagsContainer heading={'Tags'} tagsArray={ArrayTags} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tutor_indivisual_curr_line">
                    <div className="horizontalline_new"></div>
                </div>
                <div className="tutor_indivisual_extra_curr_container4">
                    <div className="container-fluid">
                        <PlayBanner
                            heading={'Resources'}
                            subHeading1={'Text Books'}
                            subHeading2={'Audio Clips'}
                            subText2={'Reading from Concrete Wave'}
                            isDivider={false}
                            resourcesArray={resourcesArray}
                        />
                    </div>
                </div>
                <div className="tutor_indivisual_extra_curr_container5">
                    <div className="horizontalline_new"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="container5_left_row">
                                    <div className="left_text">
                                        <Typography className="extra_curricular_text">Reviews</Typography>
                                    </div>
                                    <div className="right_text">
                                        <Typography className="extra_curricular_text">July</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="container5_right_container">
                                    {ReviewListArray.map((val, index) => (
                                        <>
                                            <ReviewRatingList
                                                key={index}
                                                desc={val.desc}
                                                subject={val.subject}
                                                type={val.type}
                                                typeName={val.typeName}
                                                rating={val.rating}
                                                review={val.review}
                                            />
                                            {index !== ReviewListArray.length - 1 && (
                                                <div className="container5_divider"></div>
                                            )}
                                        </>
                                    ))}
                                    <div className="see_all_reviews">
                                        <Link to="/">
                                            <Typography className="see_text">See All</Typography>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commonGreyFooter">
                    <PageFooter padding={false} />
                    </div>
                </div>
                
            
            </NavigationMenu>
        </div>
    );
};

export default IndivisualExtraCurricular;
