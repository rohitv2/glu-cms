import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import { NextClassCardElement } from './types';
import DateSubjectCard from './DateSubjectCard';
import AspectRatioImgCard from './AspectRationImgCard';
import FormControlChildrenSelect from '../Form/FormControlChildrenSelect';
import { ChildrenSelectElement } from '../Form/types';

const useStyles = makeStyles({
    root: {
        padding: '5.3125rem 3.125rem',
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
    },
    imgWrapper: {
        paddingRight: '9.375rem',
        paddingLeft: ({ imgBig, isTitle }: any) => (imgBig || !isTitle ? 0 : '3.125rem'),
    },
});

interface INextClassCard extends NextClassCardElement {
    background?: 'primary' | 'secondary';
    title?: string;
    imgBig?: boolean;
    isTitle?: boolean;
    link?: string;
    teacherLink: string;
    childrenSelect?: ChildrenSelectElement;
}

const NextClassCard: FC<INextClassCard> = ({
    img,
    date,
    startTime,
    endTime,
    subject,
    description,
    subTitle,
    name,
    background,
    title = 'Next Class',
    imgBig,
    isTitle = true,
    link,
    teacherLink,
    teacherId,
    childrenSelect,
}) => {
    const classes = useStyles({ background, imgBig, isTitle });

    return (
        <Grid container className={classes.root}>
            {isTitle && (
                <Grid container direction="column" item xs={2}>
                    <TitlePrimary>{title}</TitlePrimary>
                    <FormControlChildrenSelect data={childrenSelect} />
                </Grid>
            )}
            <Grid container item xs={4} className={classes.imgWrapper}>
                <AspectRatioImgCard img={img} ratio="77%" />
            </Grid>
            <Grid container direction="column" item xs={5}>
                <DateSubjectCard
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    subject={subject}
                    description={description}
                    subTitle={subTitle}
                    name={name}
                    link={link}
                    teacherLink={teacherLink}
                    teacherId={teacherId}
                />
            </Grid>
            <Grid container justify="flex-end" item xs={1}></Grid>
        </Grid>
    );
};

NextClassCard.defaultProps = {
    background: 'primary',
};

export default NextClassCard;
