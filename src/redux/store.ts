import { combineReducers } from 'redux';
import userEventsReducer from './user-events';

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
});
