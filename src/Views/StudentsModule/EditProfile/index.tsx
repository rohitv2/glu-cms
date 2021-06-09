import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfilePageContainer, {
    OnEducationCreate,
    OnEducationEdit,
} from '../../../Containers/Pages/EditProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';
import { UpdateProfileForm } from '../../../Interfaces/students/forms';
import {
    fetchCreateEducation,
    fetchDeleteEducation,
    fetchEditEducation,
    fetchInfo,
    fetchUpdateInfo,
} from '../../../Redux/Actions/studentModuleActions';
import { OnUploadComplete } from '../../../Hooks/useFileUpload';
import { fetchUploadFile } from '../../../Redux/Actions/FileUploadAction';
import { uploadFileSelector } from '../../../Redux/Selectors/fileUpload';
import useEducation from '../../../Hooks/students/useEducation';

const EditProfile: FC = () => {
    const dispatch = useDispatch();
    const { isPending: isUploadFilePending } = useSelector(uploadFileSelector);
    const { isPending, editProfileForm, isUpdatePending } = useProfileInfo();
    const {
        isPending: isEducationPending,
        educationCards,
        isDeleteEducationPending,
        isEditEducationPending,
        isCreateEducationPending,
    } = useEducation();

    const handleSubmit = useCallback(
        (data: UpdateProfileForm) => {
            dispatch(fetchUpdateInfo(data));
        },
        [dispatch]
    );

    const handleUploadComplete: OnUploadComplete = useCallback(
        (fileName) => {
            dispatch(
                fetchUploadFile(fileName, () => {
                    dispatch(fetchInfo());
                })
            );
        },
        [dispatch]
    );

    const handleEducationDelete = useCallback(
        (id: number) => {
            dispatch(fetchDeleteEducation(id));
        },
        [dispatch]
    );

    const handleEducationEdit: OnEducationEdit = useCallback(
        (id, formData, toggleEdit) => {
            dispatch(fetchEditEducation(id, formData, toggleEdit));
        },
        [dispatch]
    );

    const handleEducationCreate: OnEducationCreate = useCallback(
        (formData, toggleAdd) => {
            dispatch(fetchCreateEducation(formData, toggleAdd));
        },
        [dispatch]
    );

    return (
        <EditProfilePageContainer
            userType="students"
            isLoading={
                isPending ||
                isUpdatePending ||
                isUploadFilePending ||
                isEducationPending ||
                isDeleteEducationPending ||
                isEditEducationPending ||
                isCreateEducationPending
            }
            profile={editProfileForm}
            onSubmit={handleSubmit}
            onUploadComplete={handleUploadComplete}
            education={educationCards}
            onEducationDelete={handleEducationDelete}
            onEducationEdit={handleEducationEdit}
            onEducationCreate={handleEducationCreate}
        />
    );
};

export default EditProfile;
