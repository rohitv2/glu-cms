import React, { FC, ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import PageFooter from '../../components/PageFooter';
import CardsGridContainer from '../CardsGridContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { use100vh } from 'react-div-100vh';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const useStyles = makeStyles({
    root: {
        minHeight: ({ height }: any) => height,
    },
    rightContainer: {
        position: 'relative',
        paddingRight: '6.25rem'
    },
    titleContainer: {
        marginBottom: '2.5rem',
    },
    title: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    buttonAdd: {
        marginRight: '0.625rem',
        cursor: 'pointer',
        fontSize: '1.75rem',
    },
    link: {
        fontSize: '1.125rem',
        display: 'flex',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    linkContainer: {
        marginBottom: '4.6875rem',
    },
});

interface IEmptyPageContainer {
    title: string;
    description: string;
    rightComponent?: ReactNode;
    link?: string;
    linkText?: string;
    linkIcon?: string;
    children?: ReactNode;
}

const EmptyPageContainer: FC<IEmptyPageContainer> = ({
    title,
    description,
    rightComponent,
    link,
    linkText,
    linkIcon,
    children,
}) => {
    const height = use100vh();
    const classes = useStyles({ height });
    return (
        <CardsGridContainer rootClassName={classes.root} paddingBottom={false}>
            <Grid container direction="column" justify="space-between">
                <CardsGrid rows={2}>
                    <Grid container>
                        <TitlePrimary variant="h4">{title}</TitlePrimary>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column" className={classes.rightContainer}>
                            {rightComponent}
                            <Grid container className={classes.titleContainer}>
                                <Grid container>
                                    <Typography variant="h2" className={classes.title}>
                                        {description}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {link && (
                                <Grid container className={classes.linkContainer}>
                                    <Link to={link} className={classes.link}>
                                        <i className={classNames(linkIcon, classes.buttonAdd)} />
                                        {linkText}
                                    </Link>
                                </Grid>
                            )}
                            <Grid container direction="column">
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
                <PageFooter padding={false} />
            </Grid>
        </CardsGridContainer>
    );
};

export default EmptyPageContainer;
