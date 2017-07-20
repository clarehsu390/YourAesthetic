import React from 'react';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render() {
    const { pins } = this.props;
    const allPins = pins.map.forEach(pin => {
      return <li><img src={pin.image_url}></img></li>;
    });
    return (
      <div>
      <h4>Pins</h4>
      <ul>
        {allPins}
      </ul>
      </div>

    );

  }
}

export default PinsIndex;
