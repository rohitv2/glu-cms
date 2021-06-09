import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { link } from 'fs';

interface props {
    title: string;
    linkTo: string;
}

const Classes: React.FunctionComponent<props> = ({
    title,
    linkTo

}) => {
    return (
        <div className="class_container">
            <HeadingRowContainer title={title} link="see all" linkTo={linkTo} />
            <div className="row">
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.bookredinggirl}
                        title="Natural selection and evolution Biology - Jeff Lee"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.jumpinggirl}
                        title="Week 3 of a begginers guide Skateboarding - Morris Jarman"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.tablegirl}
                        title="Introducing advanced long devision Maths - Sarah Swan"
                        subtitle="AED200 / 45mins"
                    />
                </div>
                <div className="col-md-3">
                    <ImageThumbnail
                        image={commonImg.women}
                        title="How to structure narrative in fiction English - Freddy Smith"
                        subtitle="AED200 / 45mins"
                    />
                </div>
            </div>
        </div>
    );
};

export default Classes;
