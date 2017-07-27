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
      <div className="users-pins">
      <h2 className="saved-pins">Saved Pins</h2>
      <ul className="boards-pins">
        {this.allPins()}
      </ul>
      </div>
  );
  }
}

export default SavedPins;
