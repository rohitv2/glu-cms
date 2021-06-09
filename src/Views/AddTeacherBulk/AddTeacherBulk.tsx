import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import UploadBtn from '../../components/Button/UploadBtn';
import { parseCsvFile } from '../../Helper/parseCsvFile';
import GenerateCsvFileBtn from '../../components/Button/GenerateCsvFileBtn';
import { teacher } from '../../Helper/GenerateCsvHeaders/teacher';
import { useDispatch } from 'react-redux';
import AddInviteBtn from '../../components/Button/AddInviteBtn';
import { addNewTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';

const AddTeacherBulk: React.FunctionComponent = () => {
    const [csvfile, setCsvfile] = useState([]);
    const handleCsvFile = (file: File) => parseCsvFile(file, setCsvfile);
    const dispatch = useDispatch();
    const history = useHistory();
    const submitData = () => {
       const data = csvfile.map((item: { phoneNumber: number }) => {
            return {
                ...item,
                phoneNumber: String(item.phoneNumber),
            };
        });
        dispatch(addNewTeacherAPIcall({ teachers: data }, history));
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Teacher Data Upload"
                    btnTitle=""
                    hideBtn={true}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    <div className="row   w-100">
                        <div className="col-md-6 mb-4 col-lg-3 ml-auto">
                            <GenerateCsvFileBtn filename="teachers.csv" headers={teacher} />
                        </div>
                        <div className="col-md-6 mb-4 col-lg-5  mr-auto">
                            <UploadBtn
                                btnType="inputBtn"
                                text="upload"
                                getFile={(file: File) => {
                                    handleCsvFile(file);
                                }}
                            />
                        </div>
                    </div>

                    <AddInviteBtn click={submitData} />
                </div>
            </CardContainer>
        </div>
    );
};

export default AddTeacherBulk;
