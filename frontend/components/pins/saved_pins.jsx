import React from 'react';
import { DotLoader } from 'react-spinners';
import Modal from 'react-modal';
// import SavedPinItem from './saved_pin_item';

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

class SavedPins extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      modalIsOpen: false
    };
    this.allPins = this.allPins.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  componentDidMount() {
    console.log(this.props);
    this.props.requestBoards(this.props.currentUser.id).then(
      setTimeout(() => this.setState({ loading: false }), 1800));

  }

  allPins() {
    return this.props.boards.map((board, i) =>
    (board.saved_pins.map((pin, idx) => (
      <li onClick={this.openModal}className="saved-pin-item"key={idx}><img src={pin.image_url}></img>
      {pin.name}</li>
      ))));
  }

  render() {
    if (this.state.loading) {
      return (

        <div className='sweet-loading'>
     <DotLoader
       color={'#ff0000'}
       loading={this.state.loading}
     />
    </div>
 );
    }

    return(
      <div className="users-pins">
      <h2 className="saved-pins">Saved Pins</h2>
      <ul className="all-saved-pins">
        {this.props.boards.map((board, i) =>
        (board.saved_pins.map((pin, idx) => (
          <li onClick={this.openModal}className="saved-pin-item"key={idx}>
            <img src={pin.image_url}></img></li>
          ))))}
      </ul>
      </div>
  );
  }
}

export default SavedPins;
