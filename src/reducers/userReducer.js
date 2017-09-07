/**
 * Author : Kailash kumar
 */
import React from 'react';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
/**
 * Author: Kailash kumar
 * reducer for User Page
 * */
export default function userReducer(state = initialState.user, actions) {
    switch (actions.type) {
       
        case types.USER_LOGIN:
        debugger;
         return actions.user;

        default:
            return state;
    }
}