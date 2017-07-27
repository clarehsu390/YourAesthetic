import React from 'react';

class SavedPins extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waiting: true
    };
    this.allPins = this.allPins.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.requestBoards(this.props.currentUser.id).then(
      () => this.setState({waiting: false})
    );
  }

  allPins() {
    return this.props.boards.map((board, i) =>
    (board.saved_pins.map((pin, idx) => (
      <li key={idx}><img src={pin.image_url}></img>
      {pin.name}</li>
      ))));
  }

  render() {
    if (this.state.waiting) {
      return <div></div>;
    }

    return(
      <ul className="boards-pins">
        {this.allPins()}
      </ul>
  );
  }
}

export default SavedPins;
