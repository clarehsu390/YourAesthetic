import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.requestSingleBoard(this.props.match.params.boardId);
  }



  render() {
    if (this.props.boards.pins){
    return (
      <div className="boards-pins">
      {this.props.boards.pins.map((pin,i) => {
        return <li className="board-pin">
          <img src={pin.image_url}></img>
          <span>{pin.name}</span>
        </li>;

      }
      )}
      </div>
    );
    }
    else {
      return(
        <div></div>
      );
    }
  }
}

export default withRouter(BoardShow);
