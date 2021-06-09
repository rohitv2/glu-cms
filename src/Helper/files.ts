import split from 'lodash/split';
import last from 'lodash/last';
import Axios from 'axios';
import fileDownload from 'js-file-download';

export function mbToBytes(mb: number): number {
    return mb * 1000000;
}

export function resourceToFileName(resource = ''): string {
    return last(split(resource, '/')) || '';
}

export function downloadResource(resource = '', onSuccess?: () => void, onFail?: () => void) {
    Axios.get(resource, { responseType: 'blob' })
        .then((res) => {
            fileDownload(res.data, resourceToFileName(resource));
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch(() => {
            if (onFail) {
                onFail();
            }
        });
}
