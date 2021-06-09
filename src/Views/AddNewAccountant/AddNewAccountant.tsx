import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import FormContainer from './FormContainer';

const AddNewAccountant: React.FunctionComponent = () => {
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{backgroundColor:colors.primary}}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Add New Accountant"
                    btnTitle="Bulk Upload"
                />
            </CardContainer>
            <FormContainer/>
        </div>
    );
};

export default AddNewAccountant;
