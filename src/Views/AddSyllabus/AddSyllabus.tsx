import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import FormContainer from './FormContainer';
import { useHistory } from 'react-router-dom';

const AddNewTeacher: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/teacher/bulk-upload',
            state: {
                breadcrumb: '/dashboard/Teacher/Teacher Data Upload',
            },
        });
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Add New Syllabus"
                    hideBtn={true}
                />
            </CardContainer>
            <FormContainer />
        </div>
    );
};

export default AddNewTeacher;
