import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducers from './auth/authReducer';
import tasksReducer from './tasks/tasksReducer';
import globalReducer from './global/globalReducer';
import awardsReducer from './awards/awardsReducer';

const persistAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistAwards = {
  key: 'awards',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, authReducers),
  global: globalReducer,
  tasks: tasksReducer,
  awards: persistReducer(persistAwards, awardsReducer),
});

export default rootReducer;
