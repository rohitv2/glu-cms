import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTermsAPIcall } from '../../Redux/Actions/schoolTeacherAction';

export const useTerms = () => {
    const dispatch = useDispatch();
    const terms = useSelector((state: any) => state.schoolTeacherReducer.terms);
    const [totalTerms, setTotalTerms] = useState([]);
    if (!terms) {
        dispatch(getAllTermsAPIcall());
    }

    useEffect(() => {
        if (terms) {
            const data = terms.map((item: any) => {
                return { id: item.id, value: item.termName };
            });
            setTotalTerms(data);
        }
    }, [terms]);

    return useMemo(() => {
        return totalTerms;
    }, [totalTerms]);
};
