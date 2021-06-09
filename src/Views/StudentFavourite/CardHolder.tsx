import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
interface props {
    heading: string;
}
const CardHolder: React.FunctionComponent<props> = ({ heading }) => {
    return (
        <div className="card__box">
            <h1 className="card__heading">{heading}</h1>
            <div className="card__holder">
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
                <ImageThumbnail
                    image={commonImg.girlwithlaptop}
                    title="Biology. Natural selection and evolution"
                    subtitle="AED200 / 75mins"
                />
            </div>
        </div>
    );
};

export default CardHolder;
