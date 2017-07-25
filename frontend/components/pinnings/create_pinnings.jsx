import React from 'react';
import ReactDOM from 'react-dom';


class CreatePinning extends React.Component {
  constructor(props) {
    super(props);
    console.log("pinnings");
    console.log(this.props);
    this.state = {
      pin_id: this.props.pin.id,
      board_id: null
    };
    this.allBoards = this.allBoards.bind(this);
  }

  componentDidMount() {
    this.props.requestBoards(this.props.currentUser.id);
  }
  allBoards() {

    this.props.boards.map((board, i) => {
      return <option value={board.id}>{board.title}</option>;
    });
  }

  render() {
    return (
      <div className="board-menu">
        <select>
          {this.allBoards}
        </select>

      </div>
    );
  }
}

export default CreatePinning;
