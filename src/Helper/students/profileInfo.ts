import { ProfileCardElement } from '../../components/Cards/types';
import { EditProfileForm } from '../../Interfaces/students/forms';

export function dataToProfileCard({
    firstName,
    lastName,
    phoneNumber,
    location,
    User: { email, profile },
}: any): ProfileCardElement {
    return {
        img: profile,
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phoneNumber,
        address: location,
    };
}

export function dataToEditProfileForm({
    firstName,
    lastName,
    phoneNumber,
    location,
    about,
    User: { email, profile, password },
}: any): EditProfileForm {
    return {
        img: profile,
        firstName,
        lastName,
        phone: phoneNumber,
        location,
        email,
        about,
        password,
    };
}
