import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'wrlzfwix';
const CLOUDINARY_UPLOAD_URL = 'http://res.cloudinary.com/dwetqmwgw';

class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      description: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e) {
      e.preventDefault();
      this.props.newPin(this.state)
        .then(pin => this.props.history.push(`/`));
    }

    update(property) {
      return e => this.setState({[property]: e.target.value});
    }

    onImageDrop(files) {
      this.setState({
        uploadedFile: files[0]
      });
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


  render() {
    return (
    <form>
      <div className="FileUpload">
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop.bind(this)}>
        <p>Drop an image or click to create a pin</p>
      </Dropzone>
      </div>

      <div>
        {this.state.image_url === '' ? null :
        <div>
          <p>{this.state.name}</p>
          <img src={this.state.image_url} />
        </div>}
      </div>

      <input
        type="text"
        value={this.state.name}
        placeholder = "Name"
        onChange={this.update('name')}
        />

      <input
        type="text"
        value={this.state.description}
        placeholder = "Description"
        onChange={this.update('description')}
        />

      <button onClick={this.handleSubmit}>Create Pin</button>
  </form>
  );
  }
}

export default CreatePin;
