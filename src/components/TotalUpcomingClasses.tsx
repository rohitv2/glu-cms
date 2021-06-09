import React from 'react';
import HeadingRowContainer from './HeadingRowContainer';
import ImageThumbnail from './ImageThumbnail';
import commonImg from '../Assets/images';

interface props{
    heading: string;
    route:string;
}
const TotalUpcomingClasses: React.FunctionComponent<props> = ({heading, route}) => {
    return (
        <div className="total__upcomming__classes">
            <HeadingRowContainer title={heading} link="See all" linkTo={route} />
            <div className="row">
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.bookredinggirl}
                        title={
                            <>
                                <span className="dot">&#x26AB; &nbsp;</span>24/07/20 - 9.30am <br /> Natural selection
                                and evolution Biology - Jeff Lee
                            </>
                        }
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.women}
                        title={
                            <>
                                <span className="dot">&#x26AB; &nbsp;</span>24/07/20 - 9.30am <br /> Natural selection
                                and evolution Biology - Jeff Lee
                            </>
                        }
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.smilegirl}
                        title={
                            <>
                                <span className="dot">&#x26AB; &nbsp;</span>24/07/20 - 9.30am <br /> Natural selection
                                and evolution Biology - Jeff Lee
                            </>
                        }
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.shorthair}
                        title={
                            <>
                                <span className="dot">&#x26AB; &nbsp;</span>24/07/20 - 9.30am <br /> Natural selection
                                and evolution Biology - Jeff Lee
                            </>
                        }
                        subtitle="AED200 / 45mins"
                    />
                </div>
            </div>
        </div>
    );
};

export default TotalUpcomingClasses;
