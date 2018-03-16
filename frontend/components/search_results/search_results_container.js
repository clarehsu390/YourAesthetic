import SearchResults from './search_results';
import { connect } from 'react-redux';
import { getResults, clearSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
    search: state.search
});
const mapDispatchToProps = (dispatch, { location }) => ({
    getAllResults: (query) => dispatch(getResults(query)),
    clearSearch: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);