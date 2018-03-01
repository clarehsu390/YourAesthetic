import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props);
        console.log('results');
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.search.map((el, i) => {
                    return <li key={i}>
                    <img src={el.image_url}/>
                   </li>;
                })}
                </ul>
            </div>
        );
    }
}