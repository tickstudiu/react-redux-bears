import {
    CREATE_BEAR,
    FETCH_BEAR,
    FETCH_BEAR_BY_ID,
    UPDATE_BEAR,
    DELETE_BEAR
} from '../types/index';
import * as tools from '../../utils'

const initialState = {
    all: [],
    one: {},
    msg: ''
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_BEAR:
            return {
                ...state,
                all: action.payload.data,
            };
        case FETCH_BEAR_BY_ID:
            return {
                ...state,
                one: action.payload.data
            };
        case CREATE_BEAR:
            tools.successNotify(action.payload.message);
            return {
                ...state,
                msg: action.payload.message
            };
        case UPDATE_BEAR:
            tools.warningNotify(action.payload.message);
            return {
                ...state,
                msg: action.payload.message
            };
        case DELETE_BEAR:
            tools.errorNotify(action.payload.message);
            return {
                ...state,
                msg: action.payload.message
            };
        default:
            return state;
    }
}