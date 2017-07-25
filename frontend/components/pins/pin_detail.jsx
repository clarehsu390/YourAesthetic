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
    console.log("pin detail");
    console.log(this.props);
    this.state = {
      pin_id: 0,
      board_id: 0
    };
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div className="pin-detail">
      <h3>{this.props.pin.name}</h3>

      <img src={this.props.pin.image_url} className="pin-image">
      </img>

      <span>{this.props.pin.description}</span>
      <CreatePinning pin={this.props.pin}
        currentUser={this.props.currentUser}
        requestBoards={this.props.requestBoards}
        boards={this.props.boards}/>
    </div>
  );
  }
}

export default PinDetail;
