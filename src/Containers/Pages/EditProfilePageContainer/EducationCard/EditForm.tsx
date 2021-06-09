import React, { FC, useEffect } from 'react';
import { EducationForm } from '../../../../Interfaces/students/forms';
import { useFormik } from 'formik';
import FormLayout from './FormLayout';
import { OnEducationEdit } from '../index';

interface IEditForm {
    id: number;
    toggleEdit: () => void;
    onSave: OnEducationEdit;
    formData: EducationForm;
}

const initialValues: EducationForm = {
    school: '',
    qualification: '',
    fieldOfStudy: '',
    startDate: new Date(),
    endDate: new Date(),
};

const EditForm: FC<IEditForm> = ({ toggleEdit, formData, onSave, id }) => {
    const { values, setValues, handleChange, submitForm } = useFormik({
        initialValues,
        onSubmit: (values) => onSave(id, values, toggleEdit),
    });

    useEffect(() => {
        setValues(formData);
    }, [formData]);

    return <FormLayout onCancelClick={toggleEdit} values={values} onChange={handleChange} onSubmit={submitForm} />;
};

export default EditForm;
