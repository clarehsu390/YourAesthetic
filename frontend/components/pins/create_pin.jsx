const CLOUDINARY_UPLOAD_PRESET = 'wrlzfwix';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dwetqmwgw/image/upload';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import ReactDOM from 'react-dom';
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

class CreatePin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image_url: '',
      description: '',
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){
    this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  onImageDrop(files) {
   this.setState({
     uploadedFile: files[0]
   });

   this.handleImageUpload(files[0]);
 }
 handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(e) {
    const pin = {
      name: this.state.name,
      description: this.state.description,
      image_url: this.state.image_url,
      creator_id: this.props.currentUser.id
    };
    this.props.newPin(pin);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleBackgroundClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  onOk() {
    this.props.onOk();
    this.props.hideModal();
  }

 render() {
   return(
    <div className="create-pin">
      <button className="add" onClick={this.openModal}>+</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="create-pin"
        >
        <form id="create-pin" className="create-pin-form">
                <h4>Drop an image or click to select a file</h4>
    <Dropzone className="drop-zone"
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>

        {this.state.image_url === '' ? null :
        <div className='new-pin'>
          <img src={this.state.image_url} />
        </div>}
    </Dropzone>

      <div>

      </div>
      <input className='new-pin-input'
        type="text"
        value={this.state.name}
        placeholder = "Name"
        onChange={this.update('name')}
        />

      <input className='new-pin-input'
        type="text"
        value={this.state.description}
        placeholder = "Description"
        onChange={this.update('description')}
        />

      <button className="create" onClick={this.handleSubmit}>Create Pin</button>

      </form>

    </Modal>
    </div>
  );
  }

}

export default withRouter(CreatePin);
