import React from 'react';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render () {
    if (this.props.pins){
      return (
        <div className="all-pins">
        <ul>
          {this.props.pins.map((pin, i) => {
            return (
              <li key={i}>
                <img src={pin.image_url} className="pin"></img>
                <span className="pin-name">{pin.name}</span>
              </li>
            );
          })
        }
        </ul>
      </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default PinsIndex;
