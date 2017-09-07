/**
 * Author : Kailash kumar
 */
// import React from 'react';
import * as types from '../actions/actionTypes';
// import initialState from './initialState';
/**
 * Author: Kailash kumar
 * reducer for User Page
 * */
let temp=10;
export default function userReducer(state = { isLoggedIn: false }, actions) {
    switch (actions.type) {
        case types.USER_LOGIN:
            console.log('state', state)
            console.log('action', actions)
            return Object.assign({}, state, {
                isLoggedIn: true,
                temp:temp+=1,
                ...actions.user
            });
        default:
            return state;
    }
}