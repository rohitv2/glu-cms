import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { v4 as uuidv4 } from 'uuid';
import HeadingRowContainer from '../../components/HeadingRowContainer';

const TotalClasses = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.greentshirtboy,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.frontfacetwogirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookwritegirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookreadingboy,
        },
    ];
    return (
        <div className="total__classes">
            <HeadingRowContainer title="Upcoming Classes" link="See All"/>
            <div  className="row">
                {imageMetaDeta.map((item: any) => (
                    <div key={uuidv4()} className="col-md-3 mb-5">
                        <ImageThumbnail image={item.img} title={item.title} subtitle={item.subtitle} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TotalClasses;
