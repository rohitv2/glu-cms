import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
const { greysmallgirl, boywithtablet, animated, whitetshirtgirl } = commonImg;
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
interface props {
    title: string;
    images?: string[];
}
const Upcoming: React.FunctionComponent<props> = ({ title, images }) => {
    return (
        <div className="upcoming__class">
            <h1 className="upcoming__class__heading">{title}</h1>
            <div className="card card-1">
                <ImageThumbnail
                    image={greysmallgirl}
                    dateTime={
                        <div className="time">
                            <FiberManualRecordIcon className="icon" />
                            <h2 className="title">24/07/20 - 9.30am</h2>
                        </div>
                    }
                    title="How to structure narrative in fiction English - Sarah Swan"
                    subtitle="AED200"
                />
            </div>
            <div className="card card-2">
                <ImageThumbnail
                    image={boywithtablet}
                    dateTime={
                        <div className="time">
                            <FiberManualRecordIcon className="icon" />
                            <h2 className="title">24/07/20 - 9.30am</h2>
                        </div>
                    }
                    title="Natural selection and evolution Biology - Jeff Lee"
                    subtitle="AED200"
                />
            </div>
            <div className="card card-3">
                <ImageThumbnail
                    image={animated}
                    dateTime={
                        <div className="time">
                            <FiberManualRecordIcon className="icon" />
                            <h2 className="title">24/07/20 - 9.30am</h2>
                        </div>
                    }
                    title="Natural selection and evolution Biology - Jeff Lee"
                    subtitle="AED200"
                />
            </div>
            <div className="card card-4">
                <ImageThumbnail
                    image={whitetshirtgirl}
                    dateTime={
                        <div className="time">
                            <FiberManualRecordIcon className="icon" />
                            <h2 className="title">24/07/20 - 9.30am</h2>
                        </div>
                    }
                    title="Natural selection and evolution Biology - Jeff Lee"
                    subtitle="AED200"
                />
            </div>
        </div>
    );
};

export default Upcoming;
