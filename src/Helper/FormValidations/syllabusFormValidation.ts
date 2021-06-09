import * as yup from 'yup';
export const syllabusFormValidation = {
    validationSetting: yup.object().shape({
        class: yup.string().required(),
        subject: yup.string().required(),
        title: yup.string().required(),
        section: yup.string().required(),
        department:  yup.string().required(),
        teacher:  yup.string().required(),
    }),
    errorMsg:{
        class: "class name is required.",
        subject: "subject name is required.",
        title: "title is required.",
        section: "section name is required.",
        department: "department name is required.",
        teacher: "teacher name is required.",
    }
}

