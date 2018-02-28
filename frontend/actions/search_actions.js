import { getAllResults } from '../util/search_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

export const getResults = query => dispatch => {
    return getAllResults(query).then(
        results => dispatch(receiveResults(results))
    );
};

export const receiveResults = results => ({
    type: RECEIVE_RESULTS,
    results
});