import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import CardsGridContainer from '../../CardsGridContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import Indicator from './Indicator';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlInput from '../../../components/Form/FormControlInput';
import IconButton from '../../../components/Button/IconButton';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import Message from './Message';
import { messages } from '../../../data/messages';

const useStyles = makeStyles({
    root: {
        paddingBottom: '2.5rem'
    },
    name: {
        marginRight: '1.25rem'
    },
    nameContainer: {
        marginBottom: '5rem'
    },
    messagesContainer: {
        flexGrow: 1
    },
    input: {
        '& .MuiInputBase-input': {
            paddingLeft: '2.25rem'
        }
    },
    buttonAttach: {
        position: 'absolute',
        zIndex: 1,
        fontSize: '1rem',
        left: -5,
    },
    buttonSend: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
        fontSize: '1.25rem'
    },
    darkMode: {
        fontSize: '1.125rem',
    },
    darkModeIcon: {
        marginRight: '0.625rem'
    },
    formGroup: {
        marginBottom: '2.5rem'
    }
})

const MessagesBox: FC = () => {
    const classes = useStyles()
    return (
        <CardsGridContainer rootClassName={classes.root}>
            <Grid container direction="column">
                <Grid container alignItems="center" className={classes.nameContainer}>
                    <TitlePrimary className={classes.name}>Frank Smith</TitlePrimary>
                    <Indicator active />
                </Grid>
                <Grid container direction="column" className={classes.messagesContainer}>
                    <Grid container direction="column" item xs={9} className={classes.messagesContainer}>
                        {messages.map((message, index) => (
                            <Message key={index} {...message} />
                        ))}
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Grid container item xs={10}>
                        <FormGroup justify="center" rootClassName={classes.formGroup}>
                            <IconButton className={classes.buttonAttach}>
                                <i className="icon-Attach" />
                            </IconButton>
                            <FormControlInput
                                fullWidth
                                id="chat-new-message"
                                name="message"
                                value=""
                                onChange={() => {}}
                                placeholder="Say something"
                                fontSizeVariant={2}
                                inputRootClassName={classes.input}
                            />
                            <ButtonPrimary color="secondary" className={classes.buttonSend}>Send</ButtonPrimary>
                        </FormGroup>
                        <Grid container alignItems="center">
                            <i className={classNames('icon-Dark_Mode', classes.darkModeIcon)} />
                            <ButtonPrimary color="secondary" className={classes.darkMode}>Dark mode</ButtonPrimary>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardsGridContainer>
    )
}

export default MessagesBox
