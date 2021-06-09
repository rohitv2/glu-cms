import React from 'react';
import { makeStyles } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';

import ReviewHeader from './ReviewHeader';
import TutorReviewRating from './TutorReviewRating';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
    },
    mainPadding: {
        padding: '3.0625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
});

const TutorReview = () => {
    const menu = useMenuList('tutor')
    const classes = useStyles();

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'}>
            <div className={classes.mainPadding}>
                <ReviewHeader name="tutor" />
                <hr className={classes.topMarg} />
                <TutorReviewRating />
            </div>

            <div className={`footer ${classes.footer}`}>
                <MadeBy />
            </div>
        </NavigationMenu>
    );
};

export default TutorReview;
