import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import EmptyPageContainer from '../EmptyPageContainer';
import { UserType } from '../types';
import CardsGrid from '../../CardsGrid';
import MessageUserCard from '../../../components/Cards/MessageUserCard';
import { users } from '../../../data/messages';

const useStyles = makeStyles({
    root: {
        gap: '1.875rem',
    },
});

interface INoMessages extends UserType {
    showChat: () => void
}

const NoMessages: FC<INoMessages> = ({ userType, showChat }) => {
    const classes = useStyles();
    return (
        <EmptyPageContainer
            title="Messages"
            description="Looks like you need to start talking."
            link={`/${userType}/messages`}
            linkText="New message"
            linkIcon="icon-Message"
        >
            <CardsGrid rows={2} rootClassName={classes.root}>
                {users.map((user, index) => (
                    <MessageUserCard key={index} onClick={showChat}  {...user} />
                ))}
            </CardsGrid>
        </EmptyPageContainer>
    );
};

export default NoMessages;
