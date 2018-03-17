import React from 'react';
import PinIndexItem from '../pins/pin_index_item';
import { Link } from 'react-router-dom';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillReceiveProps() {
        console.log(this.props.search);
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
                       if (el['username']) {

                           return <li key={i} className="pin-attr">
                           <Link to={`/${el.id}`}>
                                <span>
                                    <img src={el.image_url}/>
                                </span>
                            </Link>
                            </li>;
                       } else {
                           return (
                               <PinIndexItem key={i} pin={el} />
                           );
                       }
                    }
                    )}
                </ul>
            </div>
        );
    }
}