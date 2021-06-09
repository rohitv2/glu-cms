import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SkillChip from './SkillsChip';
import { connect } from 'react-redux';
import { addTeacherSkill } from '../../Redux/Actions/teacherAction';

const useStyles = makeStyles({
    details: {
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
    },
    detailsText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    inputLabel: {
        display: 'inline-block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
        fontFamily: 'CircularXXWeb-Book',
    },
    btnContainer: {
        display: 'inline-block',
        transform: 'translateX(40rem)',
    },
    infoText: {
        fontSize: '2.265rem',
        width: '23.81rem',
        lineHeight: 1,
        marginTop: '0.5625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    hr: {
        marginTop: '2.5rem',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '2.6875rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
        fontFamily: 'CircularXXWeb-Book',
    },

    chipContainer: {
        marginTop: '3.1875rem',
    },
});
interface props {
    skills: any;
    addTeacherSkill: any;
}

const Skills: React.FC<props> = ({ skills, addTeacherSkill }) => {
    const classes = useStyles();
    const formOnSubmit = async (e: any) => {
        e.preventDefault();
        const formatData = [{ skillName: newSkill }];
        await addTeacherSkill(formatData);
        setNewSkill('');
    };
    const [newSkill, setNewSkill] = useState<string | null>(null);
    const handleSkill = (e: any) => {
        setNewSkill(e.target.value);
    };

    return (
        <div>
            <div className={classes.details}>
                <div className={classes.detailsText}>Skills</div>
                <form onSubmit={formOnSubmit}>
                    <label htmlFor="skills" className={classes.inputLabel}>
                        Add new
                    </label>
                    <input
                        value={newSkill}
                        onChange={(e) => handleSkill(e)}
                        type="text"
                        id="skills"
                        name="skill"
                        className={classes.inputBox}
                    ></input>
                </form>
            </div>
            <div className={classes.chipContainer}>
                {skills && skills.map((item: any) => <SkillChip skill={item.skillName} key={item.id} id={item.id} />)}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        skills: state.teacherReducer.teacherSkill,
    };
};

export default connect(mapStateToProps, { addTeacherSkill })(Skills);
