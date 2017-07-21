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
        <ul className="list-of-pins">
          <div class="grid" data-masonry='
            { "itemSelector": ".grid-item", "columnWidth": 200 }'>
          {this.props.pins.map((pin, i) => {
            return (
              <li key={i} className="pin-attr">
                <img src={pin.image_url} className="pin"></img>
                <span className="pin-name">{pin.name}</span>
              </li>
            );
          })
        }
        </div>
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
