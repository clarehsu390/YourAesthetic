import { getAllResults } from '../util/search_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const getResults = query => dispatch => {
    return getAllResults(query).then(
        results => dispatch(receiveResults(results))
    );
};

export const receiveResults = results => ({
    type: RECEIVE_RESULTS,
    results
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});