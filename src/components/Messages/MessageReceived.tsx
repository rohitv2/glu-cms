import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import userData from './data';

const useStyles = makeStyles({
    messageContainer:{
        maxWidth: "48.062rem",
        marginLeft:0,
        paddingLeft: 0,
        marginTop: "30px",
        display: 'flex',
    },
    tutorImage:{
        width: '42px',
        height: '42px',
        objectFit: 'cover',
        marginTop: '9px'
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

const MessageReceived: FC = () => {
    const classes = useStyles()
    return (
        <Container className={classes.messageContainer}>
           <img className={classes.tutorImage} src={userData[1].img} alt=""/>
           <Container>
                <Typography className={classes.message}> Hey, I need some help with the new French vocab homework. Do you have a bit of time to walk me through it?</Typography> 
                <Typography className={classes.messageTime}>3.10pm </Typography> 
           </Container>
        </Container>
    )
}

export default MessageReceived
