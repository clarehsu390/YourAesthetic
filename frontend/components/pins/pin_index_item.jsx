import React from 'react';
import { Route } from 'react-router-dom';
import PinDetail from 'pin_detail';
import Modal from 'react-modal';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { pin } = this.props;
    return (
     <li className="pin-attr">
      <img src={pin.image_url} className="pin"></img>
      <span className="pin-name">{pin.name}</span>
    </li>
  );
  }
}

export default PinIndexItem;
