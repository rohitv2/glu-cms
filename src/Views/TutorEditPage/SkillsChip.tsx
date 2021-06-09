import React, { useState } from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { deleteSkillById } from '../../Redux/Actions/teacherAction';
import { connect } from 'react-redux';

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
    id: Number;
    deleteSkillById: any;
}
const SkillsChip: React.FC<props> = ({ skill, id, deleteSkillById }) => {
    const classes = useStyles();
    const [close, setClose] = useState('none');

    return (
        <div
            onMouseOver={() => {
                setClose('inline-block');
            }}
            onMouseLeave={() => {
                setClose('none');
            }}
            className={classes.chips}
        >
            {skill}
            <div
                onClick={() => {
                    deleteSkillById(id);
                }}
                style={{ display: `${close}`, transform: 'translate(0.2rem 0)' }}
            >
                <CloseIcon />
            </div>
        </div>
    );
};

export default connect(null, { deleteSkillById })(SkillsChip);
