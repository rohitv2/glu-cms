import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import ColumnsContainer from '../../ColumnsContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import Tag from '../../../components/Tag';
import { EducationViewCardElement, ExperienceViewCardElement, TagCardElement } from '../../../components/Cards/types';
import ExperienceViewCard from '../../../components/Cards/ExperienceViewCard';
import EducationViewCard from '../../../components/Cards/EducationViewCard';
import NoDataFallback from '../../../components/Cards/NoDataFallback';

const useStyles = makeStyles({
    textContainer: {
        marginBottom: '1.875rem',
    },
    infoContainer: {
        paddingBottom: '4.6875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    tagsContainer: {
        paddingTop: '3.125rem',
    },
    skillsTitle: {
        marginBottom: '1.5625rem',
    },
});

interface IAbout {
    experience: ExperienceViewCardElement[];
    education: EducationViewCardElement[];
    skills: TagCardElement[];
}

const About: FC<IAbout> = ({ experience, education, skills }) => {
    const classes = useStyles();
    return (
        <CardsGridContainer background="secondary">
            <ColumnsContainer
                leftContent={
                    <Grid container direction="column">
                        <TitlePrimary>About</TitlePrimary>
                    </Grid>
                }
                rightContent={
                    <Grid container direction="column">
                        <Grid container direction="column" className={classes.infoContainer}>
                            <ColumnsContainer
                                topBorder={false}
                                leftContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Experience</TextPrimary>
                                        </Grid>
                                        <NoDataFallback condition={!!experience.length}>
                                            {experience.map((exp, index) => <ExperienceViewCard {...exp} key={index} />)}
                                        </NoDataFallback>
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Education</TextPrimary>
                                        </Grid>
                                        <NoDataFallback condition={!!education.length}>
                                            {education.map((edu, index) => (
                                                <EducationViewCard {...edu} key={index} />
                                            ))}
                                        </NoDataFallback>
                                    </Grid>
                                }
                            />
                        </Grid>
                        <Grid container direction="column" className={classes.tagsContainer}>
                            <TextPrimary className={classes.skillsTitle}>Skills</TextPrimary>
                            <Grid container item xs={10}>
                                <NoDataFallback condition={!!skills.length}>
                                    {skills.map((skill) => (
                                        <Tag key={skill.id} {...skill} />
                                    ))}
                                </NoDataFallback>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            />
        </CardsGridContainer>
    );
};

About.defaultProps = {
    experience: [],
    education: [],
    skills: [],
};

export default memo(About);
