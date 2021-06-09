import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    line: {
        height: '1px',
        width: '100%',
        marginTop: (props: any) => props.mt,
        marginBottom: (props: any) => props.mb,
        backgroundColor: colors.lightGray,
    },
});

interface props {
    mt: any;
    mb: any;
}
const LineDivider: React.FC<props> = ({ mt, mb }) => {
    const classes = useStyles({ mt, mb });
    return <Box className={classes.line} />;
};

export default LineDivider;
