import React from 'react';
import { Typography } from '@material-ui/core';
import ResourcesTableComponent from './ResourcesTableComponent';
interface props {
    heading?: string;
    subHeading1?: string;
    subHeading2?: string;
    subText2?: string;
    isDivider?: boolean;
    resourcesArray?: any;
    resource?: string;
}
const PlayBanner: React.FunctionComponent<props> = ({
    heading,
    subHeading1,
    subHeading2,
    subText2,
    isDivider,
    resourcesArray,
}) => {
    return (
        <>
            <div className="reusable_play_banner">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="leftText">{heading}</Typography>
                    </div>
                    <div className="col-md-6 p-0 borderLineMain">
                        <div className="resources_container">
                            <div className="row">
                                <div className="col-md-6 p-0 outer_textbook_container">
                                    <div className="resources_container_1 left_sm_border">
                                        <div className="col-md-12">
                                            <Typography className="resources_text">{subHeading1}</Typography>
                                        </div>
                                        {resourcesArray?.map((val: any, index) => (
                                            <ResourcesTableComponent
                                                key={index}
                                                title={val.title}
                                                subtitle={val.subtitle}
                                                resource={val.resource}
                                            />
                                        ))}

                                        {/* <ResourcesTableComponent/> */}
                                    </div>
                                </div>

                                {/* <div className="col-md-6 p-0 outer_play_container borderLine">
                                    <div className="resources_container_2">
                                        <PlayContainer heading={subHeading2} subText={subText2} />
                                    </div>
                                </div> */}
                            </div>
                            {/* {isDivider && <div className="col-12 horizontalline_new"></div>} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayBanner;
