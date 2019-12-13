import * as Stuff from '../constants/action-types';
import { GET_USER_INFO_ENDPOINT,ADD_USER_ENDPOINT,LOGIN_USER, }  from '../constants/enpoints';
import axios from 'axios';

function headers(){
    return {headers: { Authorization: localStorage.getItem('auth_token')}}
}

export function addUser(userData){
    return function(dispatch){
        return axios.post(ADD_USER_ENDPOINT, { user: userData })
            .then(response => { dispatch({type: Stuff.ADD_USER, payload: response.data });
                               return dispatch({type: Stuff.SUCCESS, payload: "CREATED" })})
            .catch(error => dispatch({type: Stuff.ERROR_FOUND, payload: error.response}))
    }
}

export function loginUser(userData){
    return function(dispatch){
        return axios.post(LOGIN_USER, {user : userData})
        .then(response => 
            {dispatch({ type: Stuff.LOGIN_USER, payload: response.data});
             return dispatch({type: Stuff.SUCCESS, payload: "Logged in"})}
        ).catch(error =>  dispatch( { type: Stuff.ERROR_FOUND, payload: error.response.data})
        )
    }
}

export function logoutUser(){
    return function(dispatch){
        dispatch({type: Stuff.LOGOUT_USER})
    }
}

export function getUserInfo(user_id){
    return function(dispatch){
        return axios.get(`${GET_USER_INFO_ENDPOINT}${parseInt(user_id)}`,headers())
        .then( response =>
            dispatch({ type: Stuff.USER_INFO, payload: response.data}))
        .catch(error => dispatch({type: Stuff.ERROR_FOUND, payload: error.response.data}))
        
    }
}


export function updateUser(user_id, userData){
    return function(dispatch){
        return axios.put(`${GET_USER_INFO_ENDPOINT}${parseInt(user_id)}`,{user: userData},headers())
        .then( response =>
            dispatch({ type: Stuff.SUCCESS, payload: "EDITED"}))
        .catch(error => dispatch({type: Stuff.ERROR_FOUND, payload: error.response.data}))
        
    }
}
