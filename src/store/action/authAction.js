import authService from "../../services/authService"
import { CLOSE_LOGIN, LOGIN_SUCCESS, LOGOUT, OPEN_LOGIN, UPDATE_INFO } from "../type"

export const closeLoginAction = () => {
    return { type: CLOSE_LOGIN }
}

export const openLoginAction = () =>{
    return { type: OPEN_LOGIN }
}

export const fetchLogin = (form) =>{
    return async (dispatch) =>{
        const res = await authService.login(form);
        if(res.data){
            dispatch(loginSuccessAction(res.data));
        }
        else{
            
        }
    }
}

export const loginSuccessAction = (data) =>{
    return { type: LOGIN_SUCCESS, payload: data }
}

export const logoutAction = () =>{
    return { type: LOGOUT }
}

export const updateInfoAction = (form) =>{
    return { type: UPDATE_INFO, payload: form }
}