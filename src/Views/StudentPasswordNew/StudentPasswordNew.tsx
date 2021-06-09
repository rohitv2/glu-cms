import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory, useLocation } from 'react-router';
import { resetPasswordAPIcall } from '../../Redux/Actions/loginAction';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setNewPasswordValidation } from '../../Helper/FormValidations/setNewPasswordValidation';
import ShowErrors from '../../components/ShowErrors';

const StudentPasswordNew = () => {
    const { register, errors, handleSubmit } = useForm({
        validationSchema: setNewPasswordValidation,
    });
    const route = useLocation();
    const dispatch = useDispatch();
    const rotuePath = useHistory();
    const redirectToHome = () => {
        setTimeout(() => {
            rotuePath.push('/login');
        }, 5000);
    };
    const submit = (values:any) => {
        const getToken = route.search.split('ref=');
        if (getToken[1]) {
            const data = { password: values.password };
            dispatch(resetPasswordAPIcall(data, getToken[1], redirectToHome));
        }
    };

    return (
        <NavigationMenu absolute>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <Typography className="title">Make New Password</Typography>
                        <Typography className="sub__title">
                            Enter a password that you’ll be able to remember. Make sure it contains one uppercase and
                            one special character.
                        </Typography>
                        <form onSubmit={handleSubmit(submit)}>
                            <UnderLineAddornment
                                label="New Password"
                                className="custom-adornment-input mb-5"
                                name="password"
                                inputRef={register}
                            />
                             {errors.password && <ShowErrors error={errors.password.message} />}
                            <TextField
                                className="line-input mb-5"
                                type="password"
                                label="Confirm Password"
                                name="confirmPassword"
                                inputRef={register}
                                fullWidth
                            />
                             {errors.confirmPassword && <ShowErrors error={errors.confirmPassword.message} />}
                            <div className="button-container">
                                <Button type="submit" className="outline-button">
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentPasswordNew;
