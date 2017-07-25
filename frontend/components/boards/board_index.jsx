import React from 'react';
import CreateBoardContainer from '../boards/create_board_container';
import {Route} from 'react-router-dom';

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
        <Route path="/:username" component={CreateBoardContainer}/>
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
