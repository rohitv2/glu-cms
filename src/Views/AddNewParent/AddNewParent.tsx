import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import ParentForm from './ParentForm';

import PdBox from '../../Containers/Cards/PdBox';

const AddNewParent: React.FunctionComponent = () => {
   
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <PdBox>
                    <ParentForm />
                </PdBox>
            </CardContainer>
        </div>
    );
};

export default AddNewParent;
