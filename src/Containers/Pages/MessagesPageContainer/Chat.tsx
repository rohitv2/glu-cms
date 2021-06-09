import React, { FC } from 'react';
import { use100vh } from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FullHeightContainer from '../../FullHeightContainer';
import ChatSidebar from './ChatSidebar';
import MessagesBox from './MessagesBox';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    container: {
        overflow: 'auto',
        maxHeight: ({ height }: any) => height
    }
});

const Chat: FC = () => {
    const height = use100vh();
    const classes = useStyles({ height });
    return (
        <FullHeightContainer>
            <Grid container className={classes.root}>
                <Grid container item xs={8} className={classes.container}>
                    <MessagesBox />
                </Grid>
                <Grid container item xs={4} className={classes.container}>
                    <ChatSidebar />
                </Grid>
            </Grid>
        </FullHeightContainer>
    );
};

export default Chat;
