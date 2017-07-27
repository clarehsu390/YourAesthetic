import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  gutter: 20,
  fitWidth: true
};
class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render () {
    const { currentUser } = this.props;
    if (this.props.pins){
      return (
    
        <div className="all-pins">
        <ul className="list-of-pins">
          {this.props.pins.map((pin, i) => <PinIndexItem key={i} pin={pin} currentUser={currentUser}/>)}
        </ul>
      </div>
      );
    }
    else {
      return (
        ""
      );
    }
  }
}

export default PinsIndex;
