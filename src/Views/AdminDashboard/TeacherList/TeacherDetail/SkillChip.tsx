import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    close: {
        display: 'inline-block',
        transform: 'translate(0.2rem 0)',
    },
    chips: {
        display: 'inline-block',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        padding: '5px 8px',
        fontSize: '1.25rem',
        marginRight: '0.625rem',
        marginBottom: '0.625rem',
        fontFamily: 'CircularXXWeb-Book',
        position: 'relative',
        cursor: 'pointer',

        '&:hover + close': {
            display: 'inline-block',
            backgroundColor: 'yellow',
        },
    },
});

interface props {
    skill: string;
}
const SkillsChip: React.FC<props> = ({ skill }) => {
    const classes = useStyles();

    return <div className={classes.chips}>{skill}</div>;
};

export default SkillsChip;
