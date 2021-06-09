import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import UploadBtn from '../../components/Button/UploadBtn';
import { parseCsvFile } from '../../Helper/parseCsvFile';
import GenerateCsvFileBtn from '../../components/Button/GenerateCsvFileBtn';
import { teacher } from '../../Helper/GenerateCsvHeaders/teacher';

const AddStaffBulk: React.FunctionComponent = () => {
    const [csvfile, setCsvfile] = useState<File>();
    const handleCsvFile = (file: File) => parseCsvFile(file, setCsvfile);

    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Staff Data Upload"
                    btnTitle=""
                    hideBtn={true}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    <div className="row   w-100">
                        <div className="col-md-6 mb-4 col-lg-3 ml-auto">
                            <GenerateCsvFileBtn filename="staff.csv" headers={teacher} />
                        </div>
                        <div className="col-md-6 mb-4 col-lg-5 mr-auto">
                            <UploadBtn
                                btnType="inputBtn"
                                text="upload"
                                getFile={(file: File) => {
                                    handleCsvFile(file);
                                }}
                            />
                        </div>
                    </div>

                    <Button form="student-form" type="submit" className="gray-btn">
                        Add & Invite
                    </Button>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddStaffBulk;
