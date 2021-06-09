import React from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import { FiberManualRecord } from '@material-ui/icons';
import moment from 'moment';
import { setDate } from 'date-fns/esm';

const useStyle = makeStyles({
    rootParent: {
        borderLeft: '1px solid #e7e7e7',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    flexWrap: {
        flexWrap: 'nowrap',
    },
    icon: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        marginRight: '1rem',
    },
    mediumImg: {
        width: (props: any) => props.imgwidth,
        maxHeight: (props: any) => props.imgHeight,
        marginRight: '2rem',
    },
    mediumTitle: {
        fontSize: (props: any) => props.fontSize,
        lineHeight: (props: any) => props.fontSize,
        color: '#000',
    },
    mediumSmallTitle: {
        fontSize: (props: any) => props.titleFontSize,
        color: '#5F5F5F',
    },
    mediumBottomText: {
        fontSize: (props: any) => props.fontSize,
        lineHeight: (props: any) => props.fontSize,
        color: '#000',
        marginTop: (props: any) => props.marginTop,
    },
});
interface props {
    imgwidth: any;
    imgHeight: any;
    fontSize: any;
    titleFontSize: any;
    marginTop: any;
    click?: () => void;
    data: any;
}
const SmallImageText: React.FC<props> = ({ imgwidth, imgHeight, fontSize, titleFontSize, marginTop, click, data }) => {
    const classes = useStyle({ imgwidth, imgHeight, fontSize, titleFontSize, marginTop });

    const handleClick = () => {
        if (click !== undefined) {
            click();
        }
    };

    return (
        <>
            <div style={{ cursor: 'pointer' }}>
                <Grid
                    container
                    className={classes.flexWrap}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    onClick={handleClick}
                >
                    <img
                        className={classes.mediumImg}
                        src={data.coverImage ? data.coverImage : commonImg.photo}
                        alt=""
                    />
                    <Box component="div">
                        <Typography className={classes.mediumTitle}>
                            <FiberManualRecord className={classes.icon} />
                            {data.sessionName}
                        </Typography>
                        <Typography className={classes.mediumSmallTitle}>{data.teacherName}</Typography>
                        <Typography className={classes.mediumBottomText}>{data.subjectName}</Typography>
                    </Box>
                </Grid>
            </div>
        </>
    );
};

export default SmallImageText;
