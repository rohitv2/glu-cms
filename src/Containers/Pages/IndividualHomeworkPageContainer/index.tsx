import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../../components/NavigationMenu';
import useMenuList from '../../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import ColumnsContainer from '../../ColumnsContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TitleBig from '../../../components/Typographies/TitleBig';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import FormControlAudio from '../../../components/Form/FormControlAudio';
import { Async, HomeworkDetailsPage, UserType } from '../types';
import PageFooter from '../../../components/PageFooter';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';
import Submit from './Submit';

const useStyles = makeStyles({
    iconMessage: {
        fontSize: '2rem',
        marginLeft: '1.25rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
    },
    textContainer: {
        marginBottom: '1.5625rem',
    },
    download: {
        padding: '0.625rem 0',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
    booksContainer: {
        paddingBottom: '4.6875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    submitTitle: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5625rem',
    },
});

interface IIndividualHomeworkPageContainer extends UserType, HomeworkDetailsPage, Async {}

// TODO Split the component to multiple components
const IndividualHomeworkPageContainer: FC<IIndividualHomeworkPageContainer> = ({
    userType,
    data,
    isLoading,
    onUploadComplete,
    isSubmittedSuccess,
    onSubmitPhysically,
    isSubmittedPhysicallySuccess,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);

    const {
        name,
        subject,
        dueDate,
        dueTime,
        about,
        description,
        isSubmitted,
        resource,
        comment,
        isSubmittedPhysically,
    } = data;

    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="secondary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container alignItems="center">
                            <TitlePrimary>{name} </TitlePrimary>
                            <i className={classNames('icon-Message', classes.iconMessage)} />
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Grid container>
                            <TitleBig>
                                {description}
                                <br />
                                {subject}
                            </TitleBig>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2} paddingBottom={false}>
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>Due</TitlePrimary>
                            <TitlePrimary>{dueDate}</TitlePrimary>
                            <TitlePrimary>{dueTime}</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column">
                            <TitlePrimary>{about}</TitlePrimary>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <Grid container>
                                <TitlePrimary>Resources</TitlePrimary>
                            </Grid>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.booksContainer}>
                                    <ColumnsContainer
                                        topBorder={false}
                                        leftContent={
                                            <Grid container direction="column">
                                                <Grid container direction="column" className={classes.textContainer}>
                                                    <Typography className={classes.text}>Text books</Typography>
                                                </Grid>
                                                {resource ? (
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        className={classes.textContainer}
                                                    >
                                                        <Typography className={classes.text}>Resource 1</Typography>
                                                        <a
                                                            href={resource}
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            download
                                                            className={classes.link}
                                                        >
                                                            <ButtonPrimary
                                                                color="secondary"
                                                                className={classes.download}
                                                            >
                                                                Download
                                                            </ButtonPrimary>
                                                        </a>
                                                    </Grid>
                                                ) : (
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        className={classes.textContainer}
                                                    >
                                                        <Typography className={classes.text}>No Resources</Typography>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        }
                                        rightContent={
                                            <Grid container direction="column">
                                                <Grid container direction="column" className={classes.textContainer}>
                                                    <Typography className={classes.text}>Audio clips</Typography>
                                                </Grid>
                                                <Grid container direction="column">
                                                    <FormControlAudio title="Extract from AQA Algebra" />
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </Grid>
                                <Submit
                                    onComplete={onUploadComplete}
                                    isSubmitted={isSubmitted || isSubmittedSuccess}
                                    comment={comment}
                                    onSubmitPhysically={onSubmitPhysically}
                                    isSubmittedPhysically={isSubmittedPhysically || isSubmittedPhysicallySuccess}
                                />
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default IndividualHomeworkPageContainer;
