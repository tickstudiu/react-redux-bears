import { CHANG_LANGUAGE } from '../types';

export * from './bearCRUD';

export const changeLanguage = lang => dispatch => {
    dispatch({
        type: CHANG_LANGUAGE,
        payload: lang
    });
};
