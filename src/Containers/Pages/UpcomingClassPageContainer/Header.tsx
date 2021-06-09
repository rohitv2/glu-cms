import React, { FC, Fragment } from 'react';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import TitleBig from '../../../components/Typographies/TitleBig';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import TextLeftIcon from '../../../components/Typographies/TextLeftIcon';
import CardsGridContainer from '../../CardsGridContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useToggle from '../../../Hooks/useToggle';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { UserType } from '../types';

const useStyles = makeStyles({
    root: {
        marginBottom: '5.125rem',
    },
    titleContainer: {
        marginBottom: '2rem',
    },
    button: {
        fontSize: '1.25rem',
    },
    confirmText: {
        fontSize: '1.25rem',
    },
    favourite: {
        marginRight: '1.25rem',
    },
    buttonsContainer: {
        whiteSpace: 'pre',
    },
    link: {
        color: 'unset',
        '&:hover': {
            textDecoration: 'none',
            color: 'unset',
        },
    },
});

interface IHeader extends UserType {}

const Header: FC<IHeader> = ({ userType }) => {
    const classes = useStyles();
    const [isConfirmCancel, toggleConfirmCancel] = useToggle(false);
    return (
        <CardsGridContainer background="secondary">
            <CardsGrid rows={2} rootClassName={classes.root}>
                <Grid container direction="column">
                    <TitlePrimary>Upcoming Class</TitlePrimary>
                </Grid>
                <Grid container direction="column">
                    <Grid container item xs={7}>
                        <AspectRatioImgCard
                            ratio="73%"
                            img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1597322212/gluschool/tutorDashboard_plnp4i.jpg"
                        />
                    </Grid>
                </Grid>
            </CardsGrid>
            <CardsGrid rows={2}>
                <Grid container direction="column">
                    <TitlePrimary>
                        29/07/20
                        <br />
                        9am-
                        <br />
                        10.15am
                    </TitlePrimary>
                </Grid>
                <Grid container direction="column">
                    <Grid container className={classes.titleContainer}>
                        <TitleBig>Igneous, Sedimentary, and Metamorphic rocks. Geography</TitleBig>
                    </Grid>
                    <Grid container alignItems="center" className={classes.buttonsContainer}>
                        <ButtonPrimary color="secondary" className={classNames(classes.button, classes.favourite)}>
                            <TextLeftIcon icon="icon-Favourites_Nav" text="Favourite" />
                        </ButtonPrimary>
                        {!isConfirmCancel ? (
                            <ButtonPrimary color="secondary" className={classes.button} onClick={toggleConfirmCancel}>
                                Cancel
                            </ButtonPrimary>
                        ) : (
                            <Fragment>
                                <TextPrimary className={classes.confirmText}>
                                    Are you sure you want to cancel?{' '}
                                </TextPrimary>
                                <Link to={`/${userType}/profile/cancel-class/1`} className={classes.link}>
                                    <ButtonPrimary color="secondary" className={classes.button}>
                                        Yes
                                    </ButtonPrimary>
                                </Link>
                                {' / '}
                                <ButtonPrimary
                                    color="secondary"
                                    className={classes.button}
                                    onClick={toggleConfirmCancel}
                                >
                                    No
                                </ButtonPrimary>
                            </Fragment>
                        )}
                    </Grid>
                </Grid>
            </CardsGrid>
        </CardsGridContainer>
    );
};

export default Header;
