import React from 'react';
import { Route } from 'react-router-dom';
import PinDetail from './pin_detail';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    const { pin } = this.props;
    return (
    <div>

     <li className="pin-attr">
      <div className="pin-holder">
        <div className="overlay">
          <button className="save-pin-button" onClick={this.openModal}>
            Save Pin
          </button>
        </div>
        <img src={pin.image_url} className="pin"></img>
        <span onClick={this.openModal} className="pin-name">{pin.name}</span>
      </div>




    </li>
    <div className="pin-detail-modal">
    <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="pin-detail"
        >
        <PinDetail pin={pin}/>
      </Modal>
      </div>
    </div>

  );
  }
}

export default PinIndexItem;
