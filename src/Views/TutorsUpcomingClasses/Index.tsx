import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import { FiberManualRecord } from '@material-ui/icons';
import SortDropdown from '../../components/SortDropdown';
import HorizontalLine from '../../components/HorizontalLine';
import DateTimeTitile from './DateTimeTitile';
import DateTimeTitleContainer from './DateTimeTitleContainer';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import DateTimeDotText from '../../components/DateTimeDotText';
import MadeBy from '../Footer/MadeBy';

const Index: React.FunctionComponent = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.frontfacetwogirl,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.greentshirtsmile,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.skettingboy,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.blackshirtgirl,
        },
    ];
    return (
       <NavigationMenu>
            <div className="black__navigation tutors__upcoming__classes">
                <div className="next__wrapper__container">
                    <DateTimeTitile
                        date="Next"
                        image={commonImg.boyondark}
                        titleOne={
                            <>
                                24/07/20 <br /> 3pm- <br /> 4.30pm
                            </>
                        }
                        titleTwo={
                            <>
                                English. <br />
                                How to structure <br /> narrative in fiction
                            </>
                        }
                        subtitleOne="AED200"
                        subtitleTwo="Ray Smith"
                    />
                    <div className="tutor__name__row">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <Typography className="name">Ray Smith</Typography>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="tutor__name__row__right__part">
                                    <div className="tutor__name__row__right__part__dot">
                                        <FiberManualRecord className="icon" />
                                        <Typography className="title">Upcoming Classes</Typography>
                                    </div>
                                    <SortDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <HorizontalLine />
                    <DateTimeTitleContainer />
                    <div className="previous__classes__container">
                        <HeadingRowContainer title="Previous Classes" link="See all" />
                        <div className="row">
                            {imageMetaDeta.map((item: any) => (
                                <div className="col-md-3 mb-5">
                                    {/* <img style={{width:"100%"}} src={item.img} alt=""/> */}
                                    <ImageThumbnail
                                        image={item.img}
                                        title={item.title}
                                        dateTime={item.dateTime}
                                        subtitle={item.subtitle}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ padding: '1rem 0' }} className="footer">
                        <MadeBy />
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default Index;
