import React from 'react';
import CreateBoard from '../boards/create_board';

class BoardIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestBoards(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="boards">
      <ul className="boards-index">
                  <CreateBoard />
        {this.props.boards.map((board, i) => {
          return <li key={i} className="board-item">{board.title}</li>;
        }
      )
    }

  </ul>
      </div>
    );
  }
}

export default BoardIndex;
