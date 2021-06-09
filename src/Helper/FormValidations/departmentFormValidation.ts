import * as yup from 'yup';
export const departmentFormValidation = {
    validationSetting: yup.object().shape({
        department: yup.string().required(),
    }),
    errorMsg:{
        department: "department name is required."
    }
}

