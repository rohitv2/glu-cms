import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { v4 as uuidv4 } from 'uuid';


const TutorListBottom: React.FunctionComponent = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.bookredinggirl,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.frontfacetwogirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.bookwritegirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.bookreadingboy,
        },

        // two
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.glasswatergirl,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.jumpinggirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.payingpadgirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200h',
            img: commonImg.typinggirl,
        },
    ];
    return (
        <div className="total__classes">
            <div className="row">
                {imageMetaDeta.map((item: any) => (
                    <div key={uuidv4()} className="col-md-3 mb-5">
                        <ImageThumbnail image={item.img} title={item.title} subtitle={item.subtitle} />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default TutorListBottom;
