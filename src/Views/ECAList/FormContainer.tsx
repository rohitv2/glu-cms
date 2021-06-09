import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { Button } from '@material-ui/core';

const FormContainer: React.FunctionComponent = () => {
    return (
        <CardContainer>
        <div className="student-container">
                <div className="student-form-row  w-100">
                    <FormRow />
                    <Button className="filter-btn">Filter</Button>
                </div>
        </div>
    </CardContainer>
    );
}

export default FormContainer;
