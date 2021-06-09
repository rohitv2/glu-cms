import { GET_FILE_URL, UPLOAD_FILE_PENDING, UPLOAD_FILE_SUCCESS } from '../ActionTypes/FileUploadTypes';

const initialState = {
    fileData: null,
    uploadFile: {
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
};
export const fileUploadReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_FILE_URL: {
            return { ...newState, fileData: action.payload };
        }
        case UPLOAD_FILE_PENDING: {
            return {
                ...newState,
                uploadFile: {
                    ...newState.uploadFile,
                    isPending: true,
                },
            };
        }
        case UPLOAD_FILE_SUCCESS: {
            return {
                ...newState,
                uploadFile: {
                    ...newState.uploadFile,
                    isPending: false,
                },
            };
        }
        default: {
            return { ...newState };
        }
    }
};
