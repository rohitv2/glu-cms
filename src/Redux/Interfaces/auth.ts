export interface loginAuth{
    email: string,
    password: string,
    // role: string,
}

export interface loginData {
    data: loginDataRes;
}
 interface loginDataRes {
    access_token: string;
    user_id:      number;
    role:         string;
    userRoleId:   number;
}
