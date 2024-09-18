import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';

import { reducer as translateReducer } from './translate';

// Combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
  
//   settings: settingsReducer,
  translate: translateReducer,
});

export default rootReducer;
