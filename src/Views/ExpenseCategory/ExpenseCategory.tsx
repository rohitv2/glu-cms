import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import FormContainer from './FormContainer';

interface props{
    triggerModal: ()=> void
}
const ExpenseCategory: React.FunctionComponent<props> = ({triggerModal}) => {
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{backgroundColor:colors.primary}}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Expense Category"
                    btnTitle="Add Expense Category"
                    btnIcon={<Add/>}
                    trigger={triggerModal}
                />
            </CardContainer>
            <FormContainer/>
        </div>
    );
};

export default ExpenseCategory;
