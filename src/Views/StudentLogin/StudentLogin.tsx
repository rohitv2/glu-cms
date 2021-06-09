import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';
import { userLoginAPIcall } from '../../Redux/Actions/loginAction';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginValidation } from '../../Helper/FormValidations/loginValidation';
import ShowErrors from '../../components/ShowErrors';

const StudentLogin = () => {
    const { register, errors, handleSubmit } = useForm({
        validationSchema: loginValidation,
    });
    const routes = useHistory();
    const handleForgot = () => {
        routes.push('/forgot-password');
    };
    const route = useHistory();
    const dispatch = useDispatch();
    const submit = (data: any) => {
        const details = {
            email: data.email,
            password: data.password,
        };
        dispatch<any>(userLoginAPIcall(details, route));
    };
    const [keepSign, setKeepSign] = useState(false);
    const handleKeepMeSignin = () => {
        setKeepSign(!keepSign);
    };
    return (
        <NavigationMenu absolute>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                className="line-input mb-5"
                                label="Email Address"
                                name="email"
                                inputRef={register}
                                fullWidth
                            />
                            {errors.email && <ShowErrors error={errors.email.message} />}
                            <UnderLineAddornment
                                label="Password"
                                name="password"
                                inputRef={register}
                                className="custom-adornment-input"
                            />
                            {errors.password && <ShowErrors mt="0" error={errors.password.message} />}
                            <div className="button-container">
                                <OutlineButton text="Sign In" buttonType="submit" />
                                <FormControlLabel
                                    color="primary"
                                    checked={keepSign}
                                    onClick={handleKeepMeSignin}
                                    className="keep__signed radio-button"
                                    control={<Radio />}
                                    label="Keep me signed in"
                                />
                            </div>
                        </form>
                    </div>
                    <Typography className="forgot__password" onClick={handleForgot}>
                        Forgot your password?
                    </Typography>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentLogin;
