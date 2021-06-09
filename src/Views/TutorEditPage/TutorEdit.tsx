import React, { useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles, Grid } from '@material-ui/core';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';
import PageFooter from '../../components/PageFooter';
import { connect } from 'react-redux';
import {
    getTeacherExperienceApiCall,
    getTeacherEducationApiCall,
    getTeacherSkills,
    getTeacherDetails,
} from '../../Redux/Actions/teacherAction';
import useMenuList from '../../Hooks/useMenuList';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
        position: 'absolute',
        top: '213rem',
    },
    mainPadding: {
        padding: '3.125rem',
        paddingBottom: '0',
        marginBottom: '0.625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
    mainGrid: {
        position: 'relative',
    },
});

interface props {
    getTeacherSkills: any;
    skillsData: any;
    getTeacherExperienceApiCall: any;
    getTeacherEducationApiCall: any;
    getTeacherDetails: any;
}

const TutorEdit: React.FC<props> = ({
    getTeacherSkills,
    skillsData,
    getTeacherExperienceApiCall,
    getTeacherEducationApiCall,
    getTeacherDetails,
}) => {
    useEffect(() => {
        getTeacherEducationApiCall();
    }, []);
    useEffect(() => {
        getTeacherSkills();
    }, []);
    useEffect(() => {
        getTeacherExperienceApiCall();
    }, []);
    useEffect(() => {
        getTeacherDetails();
    }, []);
    const menu = useMenuList('tutor');
    const classes = useStyles();

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <Grid container className={classes.mainPadding} spacing={6}>
                <Grid item md={6}>
                    <LeftGrid />
                </Grid>
                <Grid item md={6}>
                    {skillsData && <RightGrid />}
                </Grid>
            </Grid>
            <div className="commonFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

const mapStateToProps = (state: any) => {
    return {
        skillsData: state.teacherReducer.teacherSkill,
    };
};

export default connect(mapStateToProps, {
    getTeacherSkills,
    getTeacherEducationApiCall,
    getTeacherExperienceApiCall,
    getTeacherDetails,
})(TutorEdit);
