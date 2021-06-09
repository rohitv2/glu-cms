import React, { FC } from 'react';
import FormLayout from './FormLayout';
import { EducationForm } from '../../../../Interfaces/students/forms';
import { useFormik } from 'formik';
import { OnEducationCreate } from '../index';

const initialValues: EducationForm = {
    school: '',
    qualification: '',
    fieldOfStudy: '',
    startDate: new Date(),
    endDate: new Date(),
};

interface IAddForm {
    onCancelClick: () => void;
    onCreate: OnEducationCreate;
}

const AddForm: FC<IAddForm> = ({ onCancelClick, onCreate }) => {
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: values => onCreate(values, onCancelClick)
    })
    return (
        <FormLayout onCancelClick={onCancelClick} values={values} onChange={handleChange} onSubmit={handleSubmit} />
    )
}

export default AddForm
