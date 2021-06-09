import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    messageContainer:{
        maxWidth: "48.062rem",
        marginLeft:0,
        paddingLeft: 0,
        marginTop: "30px",
    },
    message:{
        color: "black",
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },
    messageTime:{
        color: "#5F5F5F",
        fontSize: "1.125rem",
        lineHeight: '1.562rem',
    }
})

const MessageSent: FC = () => {
    const classes = useStyles()
    return (
        <Container className={classes.messageContainer}>
           <Typography className={classes.message}> Hey, I need some help with the new French vocab homework. Do you have a bit of time to walk me through it?</Typography> 
           <Typography className={classes.messageTime}>3.10pm </Typography> 
        </Container>
    )
}

export default MessageSent
