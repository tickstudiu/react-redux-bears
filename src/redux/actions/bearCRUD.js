import {
    FETCH_BEAR,
    FETCH_BEAR_BY_ID,
    FETCH_BEAR_ERROR,
    CREATE_BEAR,
    CREATE_BEAR_ERROR,
    DELETE_BEAR,
    DELETE_BEAR_ERROR,
    UPDATE_BEAR,
    UPDATE_BEAR_ERROR
} from '../types/index';
import { RootUrl } from '../../config';
import * as tools from "../../utils";

export const getBears = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/api/bears`);
    if (res.success) {
        await dispatch({
            type: FETCH_BEAR,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_BEAR_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getBearById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/api/bears/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_BEAR_BY_ID,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_BEAR_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postBear = (callback, data) => async dispatch => {
    const res = await tools.postApi(`${RootUrl}/api/bears`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_BEAR,
            payload: res.data,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_BEAR_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putBear = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/api/bears/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_BEAR,
            payload: res.data,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_BEAR_ERROR,
            payload: res.error.data.messages,
        });
    }
};


export const delBear = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/api/bears/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_BEAR,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_BEAR_ERROR,
            payload: res.error.data.messages,
        });
    }
};