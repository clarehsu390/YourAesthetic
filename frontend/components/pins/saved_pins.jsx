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
    this.props.boards.map((board, i) =>
    {return board.saved_pins.map((pin, idx) => {
      return <li>{pin.name}</li>;
    });
  });
  }

  render() {
    if (this.state.waiting) {
      return <div></div>;
    }
    return(
      <ul className="pins">
        {this.allPins()}
      </ul>
  );
  }
}

export default SavedPins;
