import React, { FC } from 'react';
import { UserType } from '../types';
import useMenuList, { useMenuOptions } from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import ColumnsContainer from '../../ColumnsContainer';
import { tags } from '../../../Views/StudentsModule/Reports/data';
import Tag from '../../../components/Tag';
import Typography from '@material-ui/core/Typography';
import FormControlAudio from '../../../components/Form/FormControlAudio';
import PageFooter from '../../../components/PageFooter';
import Header from './Header';

const students = [
    'Toby Frost',
    'Lugain Rfidah',
    'Jack Marshall',
    'Mia Adams',
    'Jen Holden',
    'Ainsley Adams',
    'Arthor Smith',
    'Rohan Rai',
];

const useStyles = makeStyles({
    summaryContainer: {
        marginBottom: '4.0625rem',
    },
    tagsContainer: {
        paddingTop: '1.5rem',
    },
    resourcesContainer: {
        paddingBottom: '5rem',
    },
    resourcesTitleContainer: {
        marginBottom: '1.75rem',
    },
    textContainer: {
        marginBottom: '1.5625rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
    },
    download: {
        padding: '0.625rem 0',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    studentsContainer: {
        marginBottom: '5.75rem'
    }
});

interface IUpcomingClassPageContainer extends UserType {}

const UpcomingClassPageContainer: FC<IUpcomingClassPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const menuOptions = useMenuOptions(userType);
    return (
        <NavigationMenu
            absolute
            background="secondary"
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
            {...menuOptions}
        >
            <Header userType={userType} />
            <CardsGridContainer paddingTopVariant={2} paddingBottomVariant={2}>
                <CardsGrid rows={2} rootClassName={classes.summaryContainer}>
                    <Grid container direction="column">
                        <TitlePrimary>
                            Class
                            <br />
                            Summary
                        </TitlePrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TitlePrimary>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam
                            erat.
                        </TitlePrimary>
                    </Grid>
                </CardsGrid>
                <ColumnsContainer
                    topBorder={false}
                    leftContent={<div />}
                    rightContent={
                        <Grid container direction="column">
                            <TextPrimary>Tags</TextPrimary>
                            <Grid container item xs={8} className={classes.tagsContainer}>
                                {tags.map(({ title, id }) => (
                                    <Tag key={id} title={title} />
                                ))}
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false} paddingBottomVariant={2}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Resources</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <ColumnsContainer
                                rootClassName={classes.resourcesContainer}
                                topBorder={false}
                                leftContent={
                                    <Grid container direction="column">
                                        <Grid container className={classes.resourcesTitleContainer}>
                                            <TextPrimary>Text Books</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <Typography className={classes.text}>Geography AQA</Typography>
                                            <ButtonPrimary color="secondary" className={classes.download}>
                                                Download
                                            </ButtonPrimary>
                                        </Grid>
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        <Grid container className={classes.resourcesTitleContainer}>
                                            <TextPrimary>Audio Clips</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <FormControlAudio title="Reading from Sedimentary Pertology" />
                                        </Grid>
                                    </Grid>
                                }
                            />
                        </Grid>
                    }
                />
                <ColumnsContainer
                    topBorder={false}
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>8/20 Spaces</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <ColumnsContainer
                                rootClassName={classes.studentsContainer}
                                leftContent={
                                    <Grid container direction="column">
                                        {students.slice(0, 5).map((student, index) => (
                                            <TextPrimary key={index}>{student}</TextPrimary>
                                        ))}
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        {students.slice(5).map((student, index) => (
                                            <TextPrimary key={index}>{student}</TextPrimary>
                                        ))}
                                    </Grid>
                                }
                            />
                            <ButtonPrimary outlinedVariant={2} variant="outlined">
                                Invite
                            </ButtonPrimary>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default UpcomingClassPageContainer;
