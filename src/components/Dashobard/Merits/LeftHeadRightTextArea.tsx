import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../../Styles/colors';
import InputWithLabel from '../../Inputs/InputWithLabel';
import TextAreaWithLabel from '../../Inputs/TextAreaWithLabel';

const useStyles = makeStyles({
    parent: {},
    heading: {
        fontSize: '1.875rem',
        lineHeight: '3.437rem',
        color: colors.black,
        marginTop: '3rem',
    },
    subTitle: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        color: colors.darkGray,
    },
    date: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        color: colors.black,
    },
    inputLable: {
        color: `${colors.darkGray}!important`,
    },
});
interface props {
    heading?: string;
    title?: string;
    date?: string;
    textArea?: string;
    detailValue?: string;
    headerValue?:string;
}
const LeftHeadRightTextArea: React.FC<props> = ({ heading, title, date, textArea , detailValue , headerValue, }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.parent}>
            <Grid xs={12} md={4}>
                <Typography className={classes.heading}>{heading}</Typography>
                <Typography className={classes.subTitle}>{title}</Typography>
                <Typography className={classes.date}>{date}</Typography>
            </Grid>
            <Grid xs={12} md={8}>
                <InputWithLabel value={headerValue} fieldName="Teachers name" fieldClass={classes.inputLable} />
                <TextAreaWithLabel label={textArea} value={detailValue} rows={5} cols={10} />
            </Grid>
        </Grid>
    );
};

export default LeftHeadRightTextArea;
