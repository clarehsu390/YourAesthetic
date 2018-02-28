import React from 'react';

export default class Search extends React.Component {
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
        // e.preventDefault();
        console.log('submit');
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
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