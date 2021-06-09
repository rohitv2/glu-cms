import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import TextAreaWithLabel from '../../components/Inputs/TextAreaWithLabel';
import commonImg from '../.././Assets/images';

const useStyles = makeStyles({
    parent: {},
    heading: {
        fontSize: '1.875rem',
        lineHeight: '3.437rem',
        color: colors.black,
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
    leftSide : {
        display: "flex",
        justifyContent:"flext-start",
        alignItems : "flex-start",
        marginTop: "3rem"
    },
    image : {
        marginRight:"1rem",
        marginTop:".7rem"
    },
    rightSide:{
        display : "flex",
        justifyContent : "space-between",
        alignItems:"center",
        marginTop:"3.1rem"
    },
    status:{
        fontSize : "1.3rem",
        lineHeight:"3rem",
        fontWeight:"500"
    }
});
interface props {
    imageLink?: any;
    studentName?:string;
    comment?:string;
    status?:string;
    date?:string;
    subjectName ?: string;
    detailHeader?: string;
}
const MeritSanctionCard: React.FC<props> = ({ imageLink,subjectName, studentName, date, comment , status,detailHeader}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.parent}>
            <Grid xs={12} md={4} className={classes.leftSide}>
                <div>
                    <Typography className={classes.image}>
                        <img src={imageLink ? imageLink : commonImg.smilegirl} alt="P" width="50" height="50" />
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.heading}>{studentName}</Typography>
                    <Typography className={classes.date}>{date}</Typography>
                </div>
            </Grid>
            <Grid xs={12} md={8}>
                <div className={classes.rightSide}>
                    <Typography className={classes.heading}>{subjectName}</Typography>
                    <Typography 
                        className={classes.status}
                        style ={status === "Merit" ? {color : "blue"} : {color : "red"}}
                        >
                            {status}
                    </Typography>
                </div>
                <TextAreaWithLabel label={detailHeader} value={comment} rows={5} cols={10} />
            </Grid>
        </Grid>
    );
};

export default MeritSanctionCard;
