import React, { useState } from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import SlidingDrawerContent from './SlidingDrawerContent';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';


const TotalClasses = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

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
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookwritegirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookreadingboy,
            // img: commonImg.bookredinggirl,

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
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.jumpinggirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.typinggirl,
            // img: commonImg.bookredinggirl,

        },

        // three
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.greentshirtboy,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.handonhairgirl,
            // img: commonImg.bookredinggirl,


        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.girlwithhermom,
            // img: commonImg.bookredinggirl,

        },
    ];




    const imageMetaDetaTutor = [

        // three
        {
            title: (
                <>
                    Natural selection and evolution <br /> Biology - Jeff Lee
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.greentshirtboy,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.handonhairgirl,
            // img: commonImg.bookredinggirl,


        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.girlwithhermom,
            // img: commonImg.bookredinggirl,

        },

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
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookwritegirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.bookreadingboy,
            // img: commonImg.bookredinggirl,

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
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Week 3 of a begginers guide <br /> Skateboarding - Morris Jarman
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.jumpinggirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Introducing advanced long devision <br /> Maths - Sarah Swan
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.payingpadgirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    How to structure narrative in fiction <br /> English - Freddy Smith
                </>
            ),
            subtitle: 'AED200 / 45mins',
            img: commonImg.typinggirl,
            // img: commonImg.bookredinggirl,

        },

    ];
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <div className="total__classes">
            <div className="row">

 
                {localStorage.getItem("tabValue") == "classes" && imageMetaDeta.map((item: any, index) => (
                    <div key={index} className="col-md-3 mb-5" onClick={handleDrawer} style={{ cursor: "pointer" }}>
                        <ImageThumbnail image={item.img} title={item.title} subtitle={item.subtitle} />
                    </div>
                ))}

                {localStorage.getItem("tabValue") == "tutors" && imageMetaDetaTutor.map((item: any, index) => (
                    <div key={index} className="col-md-3 mb-5" style={{ cursor: "pointer" }}>
                        <Link to="/parent/tutors/tutor">
                            <ImageThumbnail image={item.img} title={item.title} subtitle={item.subtitle} />
                        </Link>
                    </div>

                ))}

            </div>
            <Drawer
                open={openDrawer}
                onClose={handleDrawer}
                width="68.875rem"
                heading={true}>
                <SlidingDrawerContent />
            </Drawer>
        </div>
    );
};

export default React.memo(TotalClasses);
