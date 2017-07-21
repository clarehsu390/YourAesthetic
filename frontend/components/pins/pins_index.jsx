import React from 'react';
import PinIndexItem from './pin_index_item';
class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render () {
    if (this.props.pins){
      return (
        <div className="all-pins">
        <ul className="list-of-pins">
          {this.props.pins.map((pin, i) => <PinIndexItem key={i} pin={pin} />)}
        </ul>
      </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default PinsIndex;
