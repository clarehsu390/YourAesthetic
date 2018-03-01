import Search from './search';
import { connect } from 'react-redux';
import { getResults } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => ({
    getAllResults: (query) => dispatch(getResults(query))
});

export default connect(null, mapDispatchToProps)(Search);