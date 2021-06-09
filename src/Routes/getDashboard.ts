import ModuleNotFound from '../Views/NotFound/ModuleNotFound';
import { auth } from './authTyples';

export const getDashboard = (role:string, component:any) => {
    const getItme = localStorage.getItem('auth');
    const user: auth = getItme && JSON.parse(getItme);
    if(user.role===role){
        return component;
    }else{
        console.log(user, role)
        return ModuleNotFound
    }
};
