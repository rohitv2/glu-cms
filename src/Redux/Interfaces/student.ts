export interface addNewStudent {
    students: Student[];
}
export interface Student {
    first_name: string;
    last_name: string;
    email: string;
    class: string;
    section: string;
}
