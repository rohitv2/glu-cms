import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../../Styles/colors';
import LeftHeadRightTextArea from './LeftHeadRightTextArea';
import CardContainer from '../../../Containers/Cards/CardContainer';

const useStyles = makeStyles({
    pdBox: {
        paddingLeft: '3.75rem',
        paddingRight: '3.75rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    topParent: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '2.625rem',
        color: colors.black,
        marginTop: '1rem',
    },
    hrLine: {
        height: '1px',
        width: '100%',
        backgroundColor: colors.lightGray,
        marginTop: '3rem',
    },
});

interface props {
    filter?: React.ReactNode;
    pageName?: String;
    heading1?: string;
    title1?: string;
    date1?: string;
    heading2?: string;
    title2?: string;
    date2?: string;
    heading3?: string;
    title3?: string;
    date3?: string;
    textArea?:string;
}
const MeritsFeedback: React.FC<props> = ({
    filter,
    pageName,
    heading1,
    title1,
    date1,
    heading2,
    title2,
    date2,
    heading3,
    title3,
    date3,
    textArea
}) => {
    const classes = useStyles();
    return (
        <div className="student-wrapper">
            <CardContainer>
                <Box className={classes.pdBox}>
                    <Grid container spacing={0} className={classes.topParent}>
                        <Grid item xs={12} md={3}>
                            <Typography className={classes.heading}>{pageName}</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            {filter}
                        </Grid>
                    </Grid>
                    <LeftHeadRightTextArea heading={heading1} textArea={textArea} title={title1} date={date1} />
                    <Box className={classes.hrLine} />
                    <LeftHeadRightTextArea heading={heading2} textArea={textArea} title={title2} date={date2} />
                    <Box className={classes.hrLine} />
                    <LeftHeadRightTextArea heading={heading3} textArea={textArea} title={title3} date={date3} />
                </Box>
            </CardContainer>
        </div>
    );
};

export default MeritsFeedback;
