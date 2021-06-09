import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { v4 as uuidv4 } from 'uuid';
import { FiberManualRecord } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import DateTimeDotText from '../../components/DateTimeDotText';

const TotalClasses = () => {
    const imageMetaDeta = [
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.greentshirtboy,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.frontfacetwogirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookwritegirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
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
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.thinkingboy,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.jumpinggirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.typinggirl,
        },
        //third
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.twogrilpaper,
        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.frontfacetwogirl,
        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookwritegirl,
        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            dateTime: <DateTimeDotText />,
            subtitle: 'AED200 / 45mins',
            img: commonImg.twogrilpaper,
        },
    ];
    return (
        <div className="total__classes">
            <div className="row">
                {imageMetaDeta.map((item: any) => (
                    <div key={uuidv4()} className="col-md-3 mb-5">
                        <ImageThumbnail
                            image={item.img}
                            title={item.title}
                            dateTime={item.dateTime}
                            subtitle={item.subtitle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(TotalClasses);
