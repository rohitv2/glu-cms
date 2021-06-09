import { RootState } from '../Reducers/types';

export const uploadFileSelector = (state: RootState) => state.fileUploadReducer.uploadFile;
