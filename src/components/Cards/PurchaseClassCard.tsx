import React, { FC, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AspectRatioImgCard from './AspectRationImgCard';
import TitleBig from '../Typographies/TitleBig';
import TextLeftIcon from '../Typographies/TextLeftIcon';
import TitlePrimary from '../Typographies/TitlePrimary';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextPrimary from '../Typographies/TextPrimary';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PurchaseClassCardElement } from './types';
import { UserType } from '../../Containers/Pages/types';

export const PURCHASE_CARD_PLACEHOLDER: PurchaseClassCardElement = {
    img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1603963540/y9DpT_afqfwr.jpg',
    title: 'N/A',
    date: 'N/A',
    startTime: 'N/A',
    endTime: 'N/A',
    price: 'N/A',
    description: 'N/A',
    subject: 'N/A',
    name: 'N/A',
    isFavourite: false,
    teacherId: 0,
};

const useStyles = makeStyles({
    root: {
        padding: '0 3.125rem 9.375rem 6.25rem',
    },
    imgContainer: {
        marginBottom: '3.875rem',
    },
    titleContainer: {
        marginBottom: '3rem',
    },
    iconText: {
        marginRight: '1.875rem',
    },
    iconTextContainer: {
        marginBottom: '4.6875rem',
    },
    infoContainer: {
        marginBottom: '4.375rem',
    },
    button: {
        marginRight: '1.25rem',
    },
    price: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F',
    },
    buttonContainer: {
        marginBottom: '4.375rem',
    },
    description: {
        color: '#5F5F5F',
    },
    buttonBlue: {
        color: '#2267FF',
        borderColor: '#2267FF',
        '&:hover': {
            color: '#2267FF',
        },
    },
    textBlue: {
        color: '#2267FF',
    },
    link: {
        color: 'unset',
        '&:hover': {
            color: 'unset',
        },
    },
});

interface IPurchaseClassCard extends PurchaseClassCardElement, UserType {
    purchased?: boolean;
    onLeave?: () => void;
}

const PurchaseClassCard: FC<IPurchaseClassCard> = ({
    userType,
    purchased,
    img,
    title,
    slots,
    date,
    startTime,
    endTime,
    subject,
    name,
    price,
    description,
    onLeave,
    teacherId,
}) => {
    const classes = useStyles();
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        return () => onLeave && onLeave();
    }, [onLeave]);

    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container className={classes.imgContainer}>
                <Grid container item xs={6}>
                    <AspectRatioImgCard ratio="77%" img={img} />
                </Grid>
            </Grid>
            <Grid container className={classes.titleContainer}>
                <TitleBig>{title}</TitleBig>
            </Grid>
            <Grid container className={classes.iconTextContainer}>
                <TextLeftIcon icon="icon-Favourites_Nav" text="Favourite" className={classes.iconText} />
                {!!slots && <TextLeftIcon icon="icon-Available_Slots" text="6 available slots" />}
            </Grid>
            <Grid container className={classes.infoContainer}>
                {date && startTime && endTime && (
                    <Grid container direction="column" item xs={5}>
                        <TitlePrimary>{date}</TitlePrimary>
                        <TitlePrimary>
                            {startTime}-{endTime}
                        </TitlePrimary>
                    </Grid>
                )}
                <Grid container direction="column" item xs={7}>
                    <Link to={`/${userType}/tutor/${teacherId}`} className={classes.link}>
                        <TitlePrimary>{name}</TitlePrimary>
                    </Link>
                    <TitlePrimary>{subject}</TitlePrimary>
                </Grid>
            </Grid>
            {purchased ? (
                <Grid container alignItems="center" className={classes.buttonContainer}>
                    <ButtonPrimary
                        variant="outlined"
                        outlinedVariant={2}
                        className={classNames(classes.button)}
                        component={Link}
                        to={`/${userType}/profile/recorded-classes/1`}
                    >
                        Watch
                    </ButtonPrimary>
                </Grid>
            ) : confirm ? (
                <Grid container alignItems="center" className={classes.buttonContainer}>
                    <ButtonPrimary
                        variant="outlined"
                        outlinedVariant={2}
                        className={classNames(classes.button, classes.buttonBlue)}
                        component={Link}
                        to={`/${userType}/wallet`}
                    >
                        Confirm
                    </ButtonPrimary>
                    <Typography className={classNames(classes.price, classes.textBlue)}>AED{price}</Typography>
                </Grid>
            ) : (
                <Grid container alignItems="center" className={classes.buttonContainer}>
                    <ButtonPrimary
                        variant="outlined"
                        outlinedVariant={2}
                        className={classes.button}
                        onClick={() => setConfirm(true)}
                    >
                        Purchase
                    </ButtonPrimary>
                    <Typography className={classes.price}>AED{price}</Typography>
                </Grid>
            )}
            <Grid container direction="column">
                <TextPrimary className={classes.description}>{description}</TextPrimary>
            </Grid>
        </Grid>
    );
};

export default PurchaseClassCard;
