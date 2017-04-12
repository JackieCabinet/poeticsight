import { combineReducers } from 'redux';
import PoemsReducer from './reducer_poems.jsx';

const rootReducer = combineReducers({
	poems: PoemsReducer,
});

export default rootReducer;
