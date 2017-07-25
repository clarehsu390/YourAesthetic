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
    console.log(this.props.boards);

  }

  render() {
    return (
      <div className="board-menu">
        <ul className="dropdown-content">
          {this.props.boards.map((board, i) => {
            return <li><a href="#" value={board.id}>{board.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CreatePinning;
