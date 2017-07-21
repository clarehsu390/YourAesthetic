import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'wrlzfwix';
const CLOUDINARY_UPLOAD_URL = '	http://res.cloudinary.com/dwetqmwgw';

class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedUrl: ''
    };
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
          uploadedUrl: response.body.secure_url
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
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
      </div>

      <div>
        {this.state.uploadedUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedUrl} />
        </div>}
      </div>
  </form>
  );
  }
}

export default CreatePin;
