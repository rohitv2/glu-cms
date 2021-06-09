export interface parentListTypes {
    profile: string;
    parentId: number;
    first_name: string;
    last_name: string;
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
    action: string;
}

export interface addparentArray {
    parents: Array<addParentFormDataType>;
}
export interface addParentFormDataType {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    phoneNumber: string;
}

export interface parentDetailsTypes {
    name: string;
    email: string;
    phoneNumber: string;
    profile: string
}
