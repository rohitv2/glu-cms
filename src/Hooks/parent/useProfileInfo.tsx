import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { infoSelector, updateInfoSelector } from '../../Redux/Selectors/studentModule';
import { fetchInfo } from '../../Redux/Actions/studentModuleActions';

function useProfileInfo() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, profileCard, editProfileForm } = useSelector(infoSelector);
    const { isPending: isUpdatePending } = useSelector(updateInfoSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchInfo());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            data,
            profileCard,
            editProfileForm,
            about: data.about,
            isUpdatePending,
            name: `${data.firstName || ''} ${data.lastName || ''}`,
        }),
        [isPending, data, profileCard, editProfileForm, isUpdatePending]
    );
}

export default useProfileInfo;
