import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
// import { useHistory } from 'react-router';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
    root: {
        padding: '2.875rem 1.875rem',
        transition: 'all 0.5s'

    },
    spacingBottom: {
        marginBottom: '2.5rem',
        transition: 'all 0.5s'

    },
    parentBorder: {
        borderBottom: `1px solid ${colors.borderGray}`,
        paddingBottom: '1rem',
        marginBottom: '1rem',
        transition: 'all 0.5s'
    },
    heading: {
        fontSize: '1.875rem',
        lineHeight: '2.187rem',
        color: colors.black,
        fontWeight: 500,
        transition: 'all 0.5s'

    },
    imageWidth: {
        width: '75%',
        overflow: 'hidden',
        transition: 'all 0.5s'

    },
    image: {
        width: '3.75rem',
        height: '3.75rem',
        objectFit: 'cover',
        marginRight: '1.25rem',
        transition: 'all 0.5s'

    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.437rem',
        color: colors.black,
        transition: 'all 0.5s'

    },
    link: {
        fontSize: '1rem',
        color: colors.primary,
        cursor: 'pointer',
        transition: 'all 0.5s'

    },
    comment: {
        fontSize: '1.4rem',
        color: colors.black,
        marginTop: '1rem',
        transition: 'all 0.5s'

    },
    percent: {
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
        transition: 'all 0.5s'

    },
});

type dataType = {
    image: string;
    title: string;
    linkName: string;
    linkTo: string;
    percent: string;
    comment: string;
    hideComment: boolean;
};
interface props {
    headingOne: string;
    headingTwo?: string;
    data: Array<dataType>;
    handleFeedback?: (i: number) => void;
}
const ProfileFeedbackCard: React.FunctionComponent<props> = ({ headingOne, headingTwo, data, handleFeedback }) => {
    const classes = useStyles();
    // const routes = useHistory();
    // const handleRoute = (link: string) => {
        // if (link !== '' && link !== undefined) {
        //     routes.push(link);
        // }
    // };
    return (
        <Box component="div" className={classes.root}>
            <Typography className={classes.heading}>{headingOne}</Typography>
            <Typography className={classNames(classes.heading, classes.spacingBottom)}>{headingTwo}</Typography>
            {data.map((item: dataType, i: number) => (
                <Grid
                    container
                    key={uuidv4()}
                    alignItems="center"
                    justify="space-between"
                    className={classes.parentBorder}
                >
                    <Grid container alignItems="center" justify="flex-start" className={classes.imageWidth}>
                        <img src={item.image} className={classes.image} alt="" />
                        <Box component="div">
                            <Typography className={classes.title}>{item.title}</Typography>

                            <Typography className={classes.link} onClick={() => handleFeedback && handleFeedback(i)}>
                                {item.hideComment ? 'Hide Feedback' : item.linkName}
                            </Typography>
                            {item.hideComment && (
                                <Typography
                                    className={classes.comment}
                                    onClick={() => handleFeedback && handleFeedback(i)}
                                >
                                    {item.comment ? item.comment : 'No comment found.'}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Typography className={classes.percent}>{item.percent}</Typography>
                </Grid>
            ))}
        </Box>
    );
};

export default ProfileFeedbackCard;
