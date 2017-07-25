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
    const { currentUser } = this.props;
    if (this.props.pins){
      return (
        <div className="all-pins">
        <ul className="list-of-pins">
          {this.props.pins.map((pin, i) => <PinIndexItem key={i} pin={pin} currentUser={currentUser}
          requestBoards={this.props.requestBoards} boards={this.props.boards} />)}
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
