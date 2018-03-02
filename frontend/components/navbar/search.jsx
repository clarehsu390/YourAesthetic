import React from 'react';
import { withRouter } from 'react-router-dom';
import Results from '../search_results/search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    handleSubmit() {
        this.props.getAllResults(this.state.input)
        // .then(this.props.history.push('/results'));
        this.setState({input: ""});
        if (this.props.search.length !== 0) {
            this.props.history.push('/search/results');
        }
        // console.log(this.props.search);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }

    


    render() {
        return(
            <div onKeyPress={this.handleKeyPress} className="search-container">
                <input className="search" 
                    placeholder="Search" 
                    value={this.state.input}
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default withRouter(Search);