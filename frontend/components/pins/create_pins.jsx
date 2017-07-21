import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class CreatePin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
  );
  }
}
