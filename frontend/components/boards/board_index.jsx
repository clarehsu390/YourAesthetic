import React from 'react';

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
      <ul>
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
