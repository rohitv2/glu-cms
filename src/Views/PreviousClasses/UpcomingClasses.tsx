import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';

const UpcomingClasses = () => {
    return (
        <div className="left__right__image__container">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="left__part">
                    <ImageThumbnail
                        image={commonImg.frontfacetwogirl}
                        title={<>Biology. <br/> Natural selection and <br/> evolution</>}
                        subtitle="AED200 / 75mins"
                    />
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="right__part">
                    <ImageThumbnail
                        image={commonImg.lappygirl}
                        title={<>Biology. <br/> Natural selection and <br/> evolution</>}
                        subtitle="AED200 / 75mins"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(UpcomingClasses);
