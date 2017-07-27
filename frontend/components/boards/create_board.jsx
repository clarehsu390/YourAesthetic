import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

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

class CreateBoard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: "",
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    console.log(this.state);
    this.setState({modalIsOpen: false});
  }

  onOk() {
    this.props.onOk();
    this.props.hideModal();
  }

  handleSubmit(e) {
    const { currentUser } = this.props;
    const board = {
      title: this.state.title,
      description: this.state.description,
      user_id: this.props.currentUser.id
    };
    this.props.createNewBoard(board).then(this.closeModal());
  }

  componentWillUpdate() {

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleBackgroundClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  componentWillUpdate() {

  }

  render() {
    return(
      <div className="create-board">
      <button className="add-board" onClick={this.openModal}>+</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="create-board"
      >
      <form className="create-board-form">
        <h4>Create Board</h4>
        <input
          type="text"
          value={this.state.title}
          placeholder= "Title"
          onChange={this.update('title')}
          />
        <input
          type="text"
          value={this.state.description}
          placeholder="Description"
          onChange={this.update('description')}
          />
        <button className="create"
          onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    </Modal>
    </div>
  );
  }
}

export default withRouter(CreateBoard);
