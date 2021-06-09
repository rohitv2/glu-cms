import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { v4 as uuidv4 } from 'uuid';
import DateTimeDotText from '../../components/DateTimeDotText';

const TutorListMiddle: React.FunctionComponent = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.greentshirtboy,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.blurgirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.bookwritegirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.kidwithpad,
        },

        // two
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.glasswatergirl,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.jumpinggirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.payingpadgirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.typinggirl,
        },

        // three
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.greentshirtboy,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.handonhairgirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.payingpadgirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200h',
            img: commonImg.girlwithhermom,
        },
    ];
    return (
        <div className="total__classes">
            <div className="row">
                {imageMetaDeta.map((item: any) => (
                    <div key={uuidv4()} className="col-md-3 mb-5">
                        <ImageThumbnail image={item.img} title={item.title} dateTime={item.dateTime} subtitle={item.subtitle} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default  React.memo(TutorListMiddle);
