import { ADD_USER, LOGIN_USER, SUCCESS, ERROR_FOUND, USER_INFO, LOGOUT_USER} from '../constants/action-types';

const initialState = {
    users: [],
    comments: [],
    current_user_id: null,
    user_information: null,
    errors: '',
    success: '',
    auth_token: ''
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            localStorage.setItem("user_id", action.payload.id);
            localStorage.setItem("auth_token", action.payload.auth_token)
            return Object.assign({}, state, { current_user_id: action.payload.id, auth_token: action.payload.auth_token});
        case USER_INFO:
            return Object.assign({}, state, { user_information: action.payload});
        case LOGIN_USER:
            localStorage.setItem("user_id", action.payload.id);
            localStorage.setItem("auth_token", action.payload.auth_token)
            return Object.assign({}, state, { current_user_id: action.payload.id, auth_token: action.payload.auth_token });
        case LOGOUT_USER:
            localStorage.removeItem("user_id");
            localStorage.removeItem("auth_token");
            return Object.assign({}, state, { current_user_id: '', auth_token: '' });
        case SUCCESS:
            return Object.assign({}, state, { success: action.payload, errors : ''});
        case ERROR_FOUND:
            return Object.assign({}, state, { errors: action.payload, success: ''});
        default:
            return state;
    }
}

export default rootReducer;