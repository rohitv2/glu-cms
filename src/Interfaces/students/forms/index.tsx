export interface EditProfileForm {
    img: string;
    about: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    password: string;
}

export interface UpdateProfileForm {
    about?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    location?: string;
    password?: string;
}

export interface EducationForm {
    school: string;
    qualification: string;
    fieldOfStudy: string;
    startDate: string | Date;
    endDate: string | Date;
}

export interface SubmitHomeworkForm {
    fileName?: string;
    comment?: string;
}
