import React, { createRef } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { Button, makeStyles, IconButton } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { DateRange } from '@material-ui/icons';

const useStyle = makeStyles({
    datePickerStyle: {
        display:"none"
    },
})

const FormContainer: React.FunctionComponent = () => {
    // const datePicker = createRef();
    // const classes = useStyle();
    // const handleDatePicker = () => {
        
    // }
    return (
        <CardContainer>
            {/* <div className="date-chooser">
                <IconButton onClick={handleDatePicker}>
                <DateRange/>
                </IconButton>
                <DateSelector ref={datePicker} style={classes.datePickerStyle} />
            </div> */}
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
