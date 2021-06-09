import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import ImageThumbnail from '../../components/ImageThumbnail';
import { colors } from '../../Styles/colors';

const useStyle = makeStyles({
    heading: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        marginBottom: '2rem',
        color: colors.black,
    },
    title: {
        fontSize: '1.125rem',
        lineHeight: '1.562rem',
        color: colors.darkGray,
    },
});

interface props {
    title: string;
    subTitle: string;
    image: string;
}
const ChildThumbnail: React.FC<props> = ({ title, subTitle, image }) => {
    const classes = useStyle();
    return (
        <Box>
            <ImageThumbnail image={image} />
            <Typography className={classes.heading}>{title}</Typography>
            <Typography className={classes.title}>{subTitle}</Typography>
        </Box>
    );
};

export default ChildThumbnail;
