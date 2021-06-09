import React, { FC, memo } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CardsGridContainer from '../../CardsGridContainer';
import MessageUserCard from '../../../components/Cards/MessageUserCard';
import { users2 } from '../../../data/messages';

const useStyles = makeStyles({
    messageIcon: {
        fontSize: '1.5rem',
        marginLeft: '1.25rem',
    },
    titleContainer: {
        marginBottom: '4rem',
    },
    cardContainer: {
        padding: '1.25rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:first-child': {},
        '&:last-child': {
            borderBottom: 0,
        },
    },
});

const ChatSidebar: FC = () => {
    const classes = useStyles();
    return (
        <CardsGridContainer background="secondary">
            <Grid container direction="column">
                <Grid container alignItems="center" className={classes.titleContainer}>
                    <TitlePrimary>Messages</TitlePrimary>
                    <i className={classNames('icon-Message', classes.messageIcon)} />
                </Grid>
                <Grid container direction="column">
                    {users2.map((user, index) => (
                        <Grid key={index} container className={classes.cardContainer}>
                            <MessageUserCard
                                indicator
                                indicatorActive={user.status === 'Online'}
                                expanded={index === 1}
                                {...user}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </CardsGridContainer>
    );
};

export default memo(ChatSidebar);
