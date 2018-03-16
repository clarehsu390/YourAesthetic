import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillUnmount() {
        this.props.clearSearch();
    }

    render() {
        return (
            <div className="results">
            <h1>{this.props.search.length} result(s) for your search</h1>
                <ul className="search-results">

                    {this.props.search.map((el, i) => {
                        return <li key={i}>
                        <img className="search-pin"src={el.image_url}/>
                    </li>;})}
                </ul>
            </div>
        );
    }
}