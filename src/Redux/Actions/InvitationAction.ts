import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { toast } from 'react-toastify';

export const invitationAPIcall = (data: { invitee_id: number; for_role: string }) => {
    return (dispatch: any) => {
        API.post(endpoints.invitation, data)
            .then((res) => {
                toast.success('Invitation link sent.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
