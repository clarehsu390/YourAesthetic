import SearchResults from './search_results';
import { connect } from 'react-redux';
import { getResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
    search: state.search
});
const mapDispatchToProps = (dispatch, { location }) => ({
    getAllResults: (query) => dispatch(getResults(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);