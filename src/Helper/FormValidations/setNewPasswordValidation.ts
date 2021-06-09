import * as yup from 'yup';
export const setNewPasswordValidation = yup.object().shape({
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null as any], 'Passwords must match'),
});
