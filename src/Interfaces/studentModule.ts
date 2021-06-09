import { string } from "yup"

export interface studentDetailsProps {
    name: string;
    email: string;
    class: string;
    subjects: string;
    timetable: Array<string>;
    profile: string;
    phoneNumber: string
}