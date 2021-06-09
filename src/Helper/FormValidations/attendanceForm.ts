import * as yup from 'yup';

export const attendanceForm = {
    validationSetting: yup.object().shape({
        month: yup.string().required(),
        year: yup.string().required(),
        class: yup.string().required(),
        section: yup.string().required(),
        attendance: yup.string().required(),

    }),
    errorMsg:{
        month: "month is required.",
        year: "year is required.",
        class: "class name is required.",
        section: "section is required.",
        attendance: "required"
    }
}

