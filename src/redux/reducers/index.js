import posts from './post'
import comment from './comment'
import {combineReducers} from 'redux'
const rootReducer=combineReducers({
	posts,
	comment
})
export default rootReducer;