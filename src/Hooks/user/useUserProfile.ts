import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { endpoints } from '../../Utility/endpoints';
import { dataToName } from '../../Helper/user/profile';

function useUserProfile() {
    const [state, setState] = useState({
        name: '',
    });

    useEffect(() => {
        API.get(endpoints.getUserProfile).then(({ data: { data, success } }) => {
            if (success) {
                setState(prevState => ({
                    ...prevState,
                    name: dataToName(data)
                }))
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default useUserProfile;
