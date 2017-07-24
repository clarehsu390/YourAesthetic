import React from 'react';
import Modal from 'react-modal';

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

  handleBoard(e) {
    e.preventDefault();
    // this.setState({
    //   pin_id: this.props.pin.id,
    //   board_id:
    //
    // })
  }

  render() {
    const pin = this.props.pin;
    return (<div>
      <h5>{pin.name}</h5>
      <img src={pin.image_url} className="pin">
      </img>

      <span>{pin.description}</span>
    </div>
  );
  }
}

export default PinDetail;
