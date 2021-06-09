import { useDispatch, useSelector } from 'react-redux';
import { teacherProfileSelector } from '../../Redux/Selectors/studentModule';
import { useEffect, useMemo } from 'react';
import { fetchTeacherProfile } from '../../Redux/Actions/studentModuleActions';

function useTeacherProfile(id: number) {
    const dispatch = useDispatch();
    const { isPending, tutorProfileCard, availability, essentialClasses, about, reviews, similarTutors } = useSelector(
        teacherProfileSelector
    );

    useEffect(() => {
        dispatch(fetchTeacherProfile(id));
    }, [dispatch, id]);

    return useMemo(
        () => ({
            isTeacherProfilePending: isPending,
            tutorProfileCard,
            availability,
            essentialClasses,
            about,
            reviews,
            similarTutors
        }),
        [isPending, tutorProfileCard, availability, essentialClasses]
    );
}

export default useTeacherProfile;
