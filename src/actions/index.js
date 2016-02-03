'use strict';

export const ROOT_URL = 'http://ec2-52-35-69-130.us-west-2.compute.amazonaws.com:8069/v1';

/**
 * ACTION types
 */
export const SET_ROUTE = 'SET_ROUTE';
export const FETCH_LISTS = 'FETCH_LISTS';
export const DELETE_LIST = 'DELETE_LIST';
export const CREATE_LIST = 'CREATE_LIST';

/**
 * ACTION creators
 */
export * from './delete-list.action';
export * from './fetch-list.action';
export * from './create-list.action';
export * from './set-route.action';
