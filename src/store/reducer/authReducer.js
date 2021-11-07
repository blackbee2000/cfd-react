import { CLOSE_LOGIN, LOGIN_SUCCESS, LOGOUT, OPEN_LOGIN, UPDATE_INFO } from "../type";

const authStateInital = {
    user: JSON.parse(localStorage.getItem('login')),
    openLogin: false
}

const authReduer = (state = authStateInital, action) =>{

    switch(action.type){
        case LOGIN_SUCCESS:

            localStorage.setItem('login', JSON.stringify(action.payload));
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload,
            }
        case OPEN_LOGIN:
            return{
                ...state,
                openLogin: true
            }
        case CLOSE_LOGIN:
            return{
                ...state,
                openLogin: false
            }
        case UPDATE_INFO:
            localStorage.setItem('login', JSON.stringify(action.payload));
            return{
                ...state,
                user: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('login');
            localStorage.removeItem('token');
            return{
                ...state,
                user: null,
                openLogin: false
            }
    }

    return state;
}

export default authReduer;