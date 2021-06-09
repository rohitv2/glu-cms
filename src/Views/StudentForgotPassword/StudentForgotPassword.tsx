import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { forgotPasswordAPIcall } from '../../Redux/Actions/loginAction';

const StudentForgotPassword = () => {
    const [email, setEmail] = useState('');
    const handleSend = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };
    const dispatch = useDispatch();
    const sendResetPassword = () => {
        const data = {email};
        dispatch(forgotPasswordAPIcall(data))
    }
    return (
        <NavigationMenu absolute>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <Typography className="title">Reset Password</Typography>
                        <Typography className="sub__title">
                            We will send a link to the email address your account is registered with, so you can reset
                            your password.
                        </Typography>
                        <TextField
                            className="line-input mb-4"
                            label="Email Address"
                            value={email}
                            onChange={handleSend}
                            fullWidth
                        />
                        <div className="button-container">
                            <Button className="outline-button" onClick={sendResetPassword}>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentForgotPassword;
