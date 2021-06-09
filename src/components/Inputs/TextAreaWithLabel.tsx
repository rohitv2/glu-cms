import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        width: '100%',
    },
    label: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: (props: any) => (props.weight ? props.weight : 300),
        color: (props: any) => (props.color ? props.color : colors.darkGray),
        marginTop: '2rem',
    },
    textarea: {
        width: '100%',
        border: (props: any) =>
            props.borderColor ? `1px solid ${props.borderColor}` : `1px solid ${colors.lightGray}`,
        marginTop: '2rem',
        fontSize: '1.562rem',
    },
});
interface props {
    onChanged?: any;
    label?: string;
    rows?: number;
    cols?: number;
    color?: string;
    weight?: number;
    borderColor?: string;
    value?: any;
}
const TextAreaWithLabel: React.FC<props> = ({ onChanged, label, rows, cols, color, weight, borderColor, value }) => {
    const classes = useStyles({ color, weight, borderColor });
    return (
        <Box className={classes.parent}>
            <Typography className={classes.label}>{label}</Typography>
            <textarea onChange={onChanged} className={classes.textarea} value={value} rows={rows} cols={cols} />
        </Box>
    );
};

export default TextAreaWithLabel;
