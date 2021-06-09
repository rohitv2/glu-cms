import { useCallback, useMemo, useState } from 'react';
import useToggle from './useToggle';
import { API } from '../Utility/API';
import { endpoints } from '../Utility/endpoints';
import Axios from 'axios';

export type OnUploadComplete = (fileName: string, data: any) => void;
export type Upload = (data?: any) => void;

function useFileUpload(onComplete: OnUploadComplete, returnUrl = false) {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, toggleLoading] = useToggle(false);

    const clearFile = useCallback(() => {
        setFile(null);
    }, []);

    const upload: Upload = useCallback((backData) => {
        if (file) {
            toggleLoading();
            API.get(endpoints.fileUpload + file.name).then(({ data: { data, success } }) => {
                if (success) {
                    Axios.put(`https://cors-anywhere.herokuapp.com/${data.url}`, file, {
                        headers: {
                            'x-amz-acl': 'public-read',
                            'Content-Type': 'image/jpeg',
                        },
                    }).then(({ status }) => {
                        if (status === 200) {
                            onComplete(returnUrl ? data.url : (data.url).split("?")[0], backData);
                            clearFile();
                            toggleLoading();
                        }
                    });
                }
            });
        }
    }, [file, toggleLoading, onComplete, returnUrl]);

    return useMemo(
        () => ({
            file,
            setFile,
            upload,
            isLoading,
            clearFile,
        }),
        [file, setFile, upload, isLoading, clearFile]
    );
}

export default useFileUpload;
