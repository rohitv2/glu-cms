import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import MessageSent from './MessageSent';
import MessageReceived from './MessageReceived';

import makeStyles from '@material-ui/core/styles/makeStyles';
import UserCardSidePanel from './UserCardSidePanel';
import UserCardSidePanelActive from './UserCardSidePanelActive';

import userData from './data';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles({
    body: {
        marginRight: 0,
        paddingRight: 0,
        position: 'relative',
        minWidth: '100%',
        height: '100vh',
        fontFamily: 'CircularXXWeb-Book',
        paddingBottom: "50px",
    },
    contentContainer:{
        marginRight: 0,
        paddingRight: 0,
        
    },
    userContainer:{
        backgroundColor: "white",
        paddingTop: '9.25rem',
    },

    userContainerSidePanel:{
        position: 'relative',
        marginTop: '20px',
        display: 'flex',
    },
    userName:{
        fontSize: "2.625rem",
    },
    sidePanelTitle:{
        fontSize: "2.625rem",
    },
    messageBox:{
        backgroundColor: "white",
        height: "60vh",
        marginTop: '5.187rem',
        paddingLeft: 0,
    },
    sidePanelContainer:{
        marginRight: 0,
        paddingRight: 0,
    },
    messageContainer:{
        marginLeft: 0,
        paddingLeft: 0,
        paddingTop: '5.593rem',
    },
    saySomething:{
        width: '90%',
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    sidePanel:{
        width: "49.625rem",
        height: '100vh',
        backgroundColor: '#F7F7F7',
        marginRight: 0,
        paddingTop: '9.25rem',
    },
    saySomethingText:{
        color: '#5F5F5F',
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
    },
    inputMessage:{
        paddingBottom: '8px',
    },
    sendText:{
        color: '#5F5F5F',
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
    },
    inputAdornment:{
        marginBottom: '-10px',
    }

})
const ChatPage: FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.body}>
            <Grid container className={classes.contentContainer}>
                <Grid item xs={6} className={classes.userContainer}>
                    <Typography className={classes.userName}>Ryan Goss </Typography> 
                    <Grid className={classes.messageBox}>
                        <MessageSent/>
                        <MessageReceived/>
                    </Grid>
                    <FormControl style={{width:"90%"}}>
                        <InputLabel htmlFor="message-input" className={classes.saySomethingText}><AttachFileIcon/> Say something</InputLabel>
                        <Input
                            className={classes.inputMessage}
                            id="message-input"
                            endAdornment={
                            <InputAdornment position="end" className={classes.inputAdornment}>
                                <Typography className={classes.sendText}>Send</Typography> 
                                <AttachFileIcon/>
                            </InputAdornment>
                            }
                        />
                     </FormControl>
                </Grid>
                <Grid item xs={6} className={classes.sidePanelContainer}>
                    <Container className={classes.sidePanel}>
                      <Typography className={classes.sidePanelTitle}>Messages <i className="icon-Message" style={{ fontSize: "1.906rem" }} /></Typography> 
                      <Container className={classes.messageContainer}>
                        <Grid container item className={classes.userContainerSidePanel}>
                                <UserCardSidePanel key={userData[2].id} image={userData[2].img} userName={userData[2].userName} onlineStatus={userData[2].onlineStatus}/>
                                <Divider width="100%" style={{marginTop: '10px'}}/>
                        </Grid>
      
                        <Grid container item className={classes.userContainerSidePanel}>
                                <UserCardSidePanelActive key={userData[1].id} image={userData[1].img} userName={userData[1].userName} onlineStatus={userData[1].onlineStatus}/>
                                <Divider width="100%" style={{marginTop: '20px'}}/>

                        </Grid>  
      
                        <Grid container item className={classes.userContainerSidePanel}>
                                <UserCardSidePanel key={userData[4].id} image={userData[4].img} userName={userData[4].userName} onlineStatus={userData[4].onlineStatus}/>
                                <Divider width="100%" style={{marginTop: '10px'}}/>

                        </Grid>  
                        
                        <Grid container item className={classes.userContainerSidePanel}>
                                <UserCardSidePanel key={userData[3].id} image={userData[3].img} userName={userData[3].userName} onlineStatus={userData[3].onlineStatus}/>
                                <Divider width="100%" style={{marginTop: '10px'}}/>

                        </Grid>                                  
                      </Container>
                    </Container>

                </Grid>
            </Grid>
            
        </Container>
    )
}

export default ChatPage
