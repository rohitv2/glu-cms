import { LOADER } from '../ActionTypes/uiTypes'

export const spinner = (value:boolean)=> {
    return {
        type: LOADER,
        payload: value
    }
}