import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ProfileCardElement } from './types';

const useStyles = makeStyles({
    root: {
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
        color: '#000',
        padding: '8.4375rem 3.0625rem',
    },
    container: {
        marginBottom: '4.5rem',
        position: 'relative',
    },
    section: {
        padding: '0 1.5625rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        fontWeight: 400,
    },
    img: {
        width: 393,
        height: 393,
        objectFit: 'cover',
    },
    text: {
        fontSize: '5rem',
        lineHeight: '5rem',
        fontWeight: 400,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all'
    },
    textSmall: {
        fontSize: '1.25rem',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
        },
    },
    seeLink: {
        position: 'absolute',
        right: 0,
    },
    noPaddingLeft: {
        paddingLeft: 0,
    },
    noPaddingRight: {
        paddingRight: 0,
    },
});

interface IProfileCard extends ProfileCardElement {
    rootClassName?: string;
    seeLink?: string;
    editLink?: string;
    background?: 'primary' | 'secondary';
    isTitle?: boolean;
    isEditLink?: boolean;
    isRedirectLink?: boolean;
    redirectLink?: string;
    redirectLinkText?: string
}

const ProfileCard: FC<IProfileCard> = ({
    img,
    name,
    address,
    phone,
    email,
    rootClassName,
    seeLink,
    editLink = '/',
    background,
    isTitle = true,
    isEditLink = true,
    isRedirectLink = false,
    redirectLink,
    redirectLinkText
}) => {
    const classes = useStyles({ background });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <Grid container className={classes.container}>
                <Grid container item xs={6} className={classNames(classes.section, classes.noPaddingLeft)}>
                    {isTitle && (
                        <Typography variant="h4" className={classes.title}>
                            Profile
                        </Typography>
                    )}
                </Grid>
                <Grid container item xs={6} className={classNames(classes.section, classes.noPaddingRight)}>
                    <img src={img} alt="thumbnail" className={classes.img} />
                </Grid>
                {seeLink && (
                    <Typography
                        className={classNames(classes.textSmall, classes.link, classes.seeLink)}
                        component={Link}
                        to={seeLink}
                    >
                        See
                    </Typography>
                )}
            </Grid>
            <Grid container className={classes.container}>
                <Grid container item xs={6} className={classNames(classes.section, classes.noPaddingLeft)}>
                    <Typography variant="h2" className={classes.text}>
                        {name}
                    </Typography>
                </Grid>
                <Grid
                    container
                    direction="column"
                    item
                    xs={6}
                    className={classNames(classes.section, classes.noPaddingRight)}
                >
                    <Typography variant="h3" className={classes.text}>
                        {address}
                    </Typography>
                    <Typography variant="h3" className={classes.text}>
                        {phone}
                    </Typography>
                    <Typography variant="h3" className={classes.text}>
                        {email}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid container item xs={6} className={classes.section}>
                    {isEditLink && (
                        <Typography className={classNames(classes.textSmall, classes.link)} component={Link} to={editLink}>
                            Edit profile
                        </Typography>
                    )}
                    {isRedirectLink && !isEditLink && (
                        <a className={classNames(classes.textSmall, classes.link)} href={redirectLink} target="_blank">
                            {redirectLinkText}
                        </a>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

ProfileCard.defaultProps = {
    background: 'primary',
};

export default ProfileCard;
