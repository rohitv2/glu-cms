import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
const Section2: React.FunctionComponent = () => {
    return (
        <div className="essential__class">
            <h1 className="essential__class__heading">Essential Classes</h1>
            <div className="card-1">
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
            </div>
            <div className="card-2">
                <ImageThumbnail
                    image={commonImg.bookreadingboy}
                    title="Biology.  Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
            </div>
        </div>
    );
};

export default Section2;
