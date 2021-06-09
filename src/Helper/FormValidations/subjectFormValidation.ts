import * as yup from 'yup';
export const subjectFormValidation = {
    validationSetting: yup.object().shape({
        department: yup.string().required(),
        yearGroup: yup.string().required(),
        formGroup: yup.string().required(),
        subject: yup.string().required(),
    }),
    errorMsg:{
        department: "Department name is required.",
        yearGroup: "Year Group is required.",
        formGroup: "Form Group is required.",
        subject: "subject name is required.",
    }
}

