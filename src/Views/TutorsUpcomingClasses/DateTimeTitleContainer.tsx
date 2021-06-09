import React from 'react';
import DateTimeTitile from './DateTimeTitile';
import commonImg from '../../Assets/images';
import { v4 as uuidv4 } from 'uuid';

const DateTimeTitleContainer = () => {
    const data = [
        {
            date: 'July 2020',
            image: commonImg.girlwithlaptop,
            titleOne: (
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            ),
            titleTwo: (
                <>
                    English. <br />
                    How to structure <br /> narrative in fiction
                </>
            ),
            subtitleOne: 'AED200',
            subtitleTwo: 'Ray Smith',
        },
        {
            date: '',
            image: commonImg.smilingindark,
            titleOne: (
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            ),
            titleTwo: (
                <>
                    PE. <br /> Creating a running <br /> plan for a 5K race
                </>
            ),
            subtitleOne: 'AED200',
            subtitleTwo: 'Ray Smith',
        },
        {
            date: 'August 2020',
            image: commonImg.yellowpillowboy,
            titleOne: (
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            ),
            titleTwo: (
                <>
                    PE. <br /> Creating a running <br /> plan for a 5K race
                </>
            ),
            subtitleOne: 'AED200',
            subtitleTwo: 'Ray Smith',
        },
        {
            date: '',
            image: commonImg.whitetshirtgirl,
            titleOne: (
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            ),
            titleTwo: (
                <>
                    PE. <br /> Creating a running <br /> plan for a 5K race
                </>
            ),
            subtitleOne: 'AED200',
            subtitleTwo: 'Ray Smith',
        },
        {
            date: '',
            image: commonImg.running,
            titleOne: (
                <>
                    24/07/20 <br /> 3pm- <br /> 4.30pm
                </>
            ),
            titleTwo: (
                <>
                    PE. <br /> Creating a running <br /> plan for a 5K race
                </>
            ),
            subtitleOne: 'AED200',
            subtitleTwo: 'Ray Smith',
        },
    ];
    return (
        <div className="date__image__container">
            {data.map((item: any, i:number) => (
                <DateTimeTitile
                    showLine={i<data.length-1 ? true: false}
                    showFullLine={data[i+1]?.date!==""? true: false}
                    key={uuidv4()}
                    date={item.date}
                    image={item.image}
                    titleOne={
                        item.titleOne
                    }
                    titleTwo={
                        item.titleTwo
                    }
                    subtitleOne={item.subtitleOne}
                    subtitleTwo={item.subtitleTwo}
                />
            ))}
        </div>
    );
};

export default DateTimeTitleContainer;
