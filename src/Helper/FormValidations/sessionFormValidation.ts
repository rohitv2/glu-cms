import * as yup from 'yup';
export const sessionFormValidation = {
    validationSetting: yup.object().shape({
        topicName: yup.string().required(),
        class: yup.string().required(),
        section: yup.string().required(),
        faculty: yup.string().required(),

    }),
    errorMsg:{
        topicName: "Topic name is required.",
        class: "class name is required.",
        section: "class section is required.",
        faculty: "faculty name is required.",
    }
}

