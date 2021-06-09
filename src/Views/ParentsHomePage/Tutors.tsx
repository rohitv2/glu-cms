import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import { Link } from 'react-router-dom';
import commonImg from '../../Assets/images';

interface props{
    route:string;
}

const Tutors:React.FunctionComponent<props> = ({route}) => {
    return (
        <div className="tutors">
            <HeadingRowContainer title="Tutors" link="see all" linkTo={route} />
            <div className="row">
                <div className="col-md-3">
                <Link to="/parent/tutors/tutor"> 
                    <ImageThumbnail
                            image={commonImg.bookredinggirl}
                            title={
                                <>
                                    Olivia Preston <br /> Biology, Chemistry, English +more
                                </>
                            }
                            subtitle="AED200/h"
                        />
                </Link> 
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.women}
                        title={
                            <>
                                Olivia Preston <br /> Science, Languages
                            </>
                        }
                        subtitle="AED200/h"

                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.spectsboy}
                        title={
                            <>
                                Olivia Preston <br /> Biology, Chemistry, English +more
                            </>
                        }
                        subtitle="AED200/h"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.smilegirl}
                        title={
                            <>
                                Olivia Preston <br /> Business Studies, PE, Maths
                            </>
                        }
                        subtitle="AED200/h"
                    />
                </div>
            </div>
        </div>
    );
};

export default Tutors;
