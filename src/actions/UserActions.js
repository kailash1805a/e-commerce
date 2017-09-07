/**
 * Author: Kailash kumar
 * Action is called for loading comapny information
 */
import * as types from './actionTypes';
import UserAPI from '../api/UserApi';

/**
 * Get all company list
 */
export function userLogin(user) {
    return { type: types.USER_LOGIN, user };
}


/**
 * Load All companies information 
 */
export function authenticate(username, password) {

    return function (dispatch) {
        return UserAPI.userAuthentication(username, password).then(response => {
            console.log("api response" +response);
            dispatch(userLogin(response));
        }).catch(error => {
            throw(error);
        });
    };
}
