import { RECEIVE_RESULTS, CLEAR_SEARCH } from '../actions/search_actions';

const searchReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESULTS:
            return action.results;
        case CLEAR_SEARCH:
            return [];
        default:
            return state;
    }
};

export default searchReducer;