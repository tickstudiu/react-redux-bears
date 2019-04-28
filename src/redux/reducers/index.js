import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import bearReducer from './bearReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    bearStore: bearReducer,
});

export default  rootReducers;
