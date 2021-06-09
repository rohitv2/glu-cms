import * as yup from 'yup';
export const routineFormValidation = {
    validationSetting: yup.object().shape({
        class: yup.string().required(),
        section: yup.string().required(),
        subject: yup.string().required(),
        teacher: yup.string().required(),
        day: yup.string().required(),
        department: yup.string().required(),
    }),
    errorMsg:{
        class: "class name is required.",
        section: "class section is required.",
        subject: "subject name is required.",
        teacher: "subject name is required.",
        day: "day is required.",
        department: "department name is required."
    }
}

