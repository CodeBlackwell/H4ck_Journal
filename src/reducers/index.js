import { combineReducers } from 'redux'
import simple from './simple_reducer'

const todoApp = combineReducers({
    simple,
});

export default todoApp