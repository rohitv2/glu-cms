import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import PageFooter from '../../components/PageFooter';
import { Link, useHistory } from 'react-router-dom';
import useMenuList from '../../Hooks/useMenuList';
import ReusableImageRating from './ReusableImageRating';
import useRecordClasses from '../../Hooks/tutor/useRecordClasses';
import OutlineButton from '../../components/Button/OutlineButton';
import { useDispatch } from 'react-redux';
import { getAllFreelanceRecordedClassAPIcall } from '../../Redux/Actions/freelanceTeacherAction';

const useStyles = makeStyles({
    outlineButton: {
        marginLeft: '1rem',
    },
});

const TutorMyClass: React.FunctionComponent = () => {
    const cssClasses = useStyles();
    const { recordClass, count } = useRecordClasses(false);
    const [totalClasses, setTotalClasses] = useState(0);
    const [pageNo, setPageNo] = useState(1);
    const menu = useMenuList('tutor');
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleClick = (data: any) => {
        routes.push({
            pathname: '/tutor/my-class/edit',
            state: {
                record: data,
            },
        });
    };
    useEffect(() => {
        if (recordClass) {
            setTotalClasses(recordClass.length);
        }
    }, [recordClass]);

    const showMore = () => {
        dispatch(getAllFreelanceRecordedClassAPIcall(pageNo));
        setPageNo((prevPage) => prevPage + 1);
    };

    return (
        <div className="tutor_myclasses">
            <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
                <div className="tutor_myclasses_container">
                    <div className="tutor_myclasses_header">
                        <div className="header_text">
                            <Typography className="tutor_myclasses_text">My Classes</Typography>
                        </div>
                        <div className="record_button">
                            <Link to="/tutor/record-class" style={{ textDecoration: 'none', color: 'black' }}>
                                <Typography className="tutor_myclasses_extrasmalltext">Record Class </Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="grid_classes_layout">
                        {recordClass.map((item: any, index: number) => (
                            <ReusableImageRating
                                click={() => handleClick(item)}
                                key={index}
                                heading={item.title}
                                subHeading={item.subtitle}
                                imgSrc={item.img}
                                subjectName={item.subjectName}
                            />
                        ))}
                    </div>
                    <Grid container alignItems="center" className="show_number_container">
                        <Typography className="tutor_myclasses_xxstext">
                            Showing {totalClasses} of {count}
                        </Typography>
                        {totalClasses !== count && (
                            <OutlineButton exClass={cssClasses.outlineButton} text="Show More" btnClick={showMore} />
                        )}
                    </Grid>
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </NavigationMenu>
        </div>
    );
};
export default TutorMyClass;
