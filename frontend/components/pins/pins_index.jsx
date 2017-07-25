import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 4
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
        <Masonry
          className={'list-of-pins'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
        <div className="all-pins">
        <ul className="list-of-pins">
          {this.props.pins.map((pin, i) => <PinIndexItem key={i} pin={pin} currentUser={currentUser}/>)}
        </ul>
      </div>

        </Masonry>
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
