import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { PARENT_CHILDRENS_DETAIL_CMS } from '../ActionTypes/cmsParentTypes';
import { handleError } from './errorHandler';

export const getallChildrensOfParentsAPIcall = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endpoints.schoolParent}${id}/children`)
            .then((res: any) => {
                dispatch(parentChildrensDetailRes(res.data.data));
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const parentChildrensDetailRes = (data: any) => {
    return {
        type: PARENT_CHILDRENS_DETAIL_CMS,
        payload: data,
    };
};