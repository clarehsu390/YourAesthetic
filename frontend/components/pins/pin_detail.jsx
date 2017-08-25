import React from 'react';
import Modal from 'react-modal';
import CreatePinning from '../pinnings/create_pinnings';

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PinDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pin_id: 0,
      board_id: 0
    };
  }

  render() {
    return (
      <div className="pin-detail">
      <h3>{this.props.pin.name}</h3>

      <img src={this.props.pin.image_url} className="pin-image">
      </img>

      <span className="description">{this.props.pin.description}</span>
      <div className="user-info">
      <img className="user-img" src={this.props.pin.user.image_url} />
      <span>{this.props.pin.user.username}</span>
      <span>{this.props.pin.boards.title}</span>
      </div>
    </div>
  );
  }
}

export default PinDetail;
