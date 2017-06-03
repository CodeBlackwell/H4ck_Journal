import { FETCH_GREETING } from '../constants/simple_constants'

const initialState = {
    greeting: 'Hello, this is the initial state'
};

const actionHandlers = {
    [FETCH_GREETING] (state, action) {
        return Object.assign({}, state, {
            greeting: 'This is the new state Greeting!'
        });
    }
};


// Setting up the reducer this way is an optimization for constant time lookup on action handlers
const simpleReducer = function (state = initialState, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type] (state, action)
    }
    return state
};
export default simpleReducer
