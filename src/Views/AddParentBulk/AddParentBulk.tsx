import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import UploadBtn from '../../components/Button/UploadBtn';
import { parseCsvFile } from '../../Helper/parseCsvFile';
import GenerateCsvFileBtn from '../../components/Button/GenerateCsvFileBtn';
import { parent } from '../../Helper/GenerateCsvHeaders/parent';
import AddInviteBtn from '../../components/Button/AddInviteBtn';
import { useDispatch } from 'react-redux';
import { addNewParentAPIcall } from '../../Redux/Actions/parentAction';
import { useHistory } from 'react-router-dom';
import { addParentFormDataType } from '../../Interfaces/parentModule';

const AddParentBulk: React.FunctionComponent = () => {
    const [csvfile, setCsvfile] = useState<Array<addParentFormDataType>>([]);
    const handleCsvFile = (file: File) => parseCsvFile(file, setCsvfile);
    const dispatch = useDispatch();
    const route = useHistory();
    const submitData = () => {
      const data =  csvfile.map((item:addParentFormDataType)=>{
            return {
                ...item,
                phoneNumber: String(item.phoneNumber)
            }
        })
        dispatch(addNewParentAPIcall({parents:data}, route))
    }
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Parent Data Upload"
                    btnTitle=""
                    hideBtn={true}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    <div className="row   w-100">
                        <div className="col-md-6 mb-4 col-lg-3 ml-auto">
                           <GenerateCsvFileBtn filename="parents.csv" headers={parent} />
                        </div>
                        <div className="col-md-6 mb-4 col-lg-5 mr-auto">
                            <UploadBtn btnType="inputBtn" text="upload" getFile={(file: File)=>{handleCsvFile(file)}}/>
                        </div>
                    </div>

                    <AddInviteBtn click={submitData}/>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddParentBulk;
