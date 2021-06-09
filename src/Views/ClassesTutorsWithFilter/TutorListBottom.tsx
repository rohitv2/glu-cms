import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';

const TutorListBottom: React.FunctionComponent = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookredinggirl,
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

        // two
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.glasswatergirl,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.jumpinggirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.typinggirl,
        },
    ];
    return (
        <div className="total__classes">
            <div className="row">
                {imageMetaDeta.map((item: any, index) => (
                    <div key={index} className="col-md-3 mb-5">
                        <ImageThumbnail image={item.img} title={item.title} subtitle={item.subtitle} />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default React.memo(TutorListBottom);
