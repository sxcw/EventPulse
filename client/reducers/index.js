import {combineReducers} from 'redux';
import PulseReducer from './reducer_pulses';


// So in the regular code, your component created an action which went to actions.js.  That then goes to a specific reducer.  All the reducers are then bundled up here
// and sent to the store.
const rootReducer = combineReducers({
  pulse: PulseReducer,
});

export default rootReducer;
