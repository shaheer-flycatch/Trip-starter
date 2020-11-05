import { combineReducers } from 'redux';
import allTrips from './tripManagement.reducer';
import alert from './alert.reducer';
const rootReducer = combineReducers({
  allTrips,
  alert

});

export default rootReducer;
