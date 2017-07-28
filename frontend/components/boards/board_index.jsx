import React from 'react';
import CreateBoardContainer from '../boards/create_board_container';
import {Route, Link} from 'react-router-dom';

class BoardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waiting: true
    };
  }
  componentDidMount(){

    this.props.requestBoards(this.props.match.params.userId).then(() => this.setState({
      waiting: false
    }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.receiveSingleUser(nextProps.match.params.userId).then(
        this.props.requestBoards(nextProps.match.params.userId)
      );
    }
  }

  render() {
    if (this.state.waiting) {
      return (
        <div></div>
      );
    }
    else {
      return (
        <div className="boards">
          <ul className="boards-index">
            <Route path="/:userId" component={CreateBoardContainer}/>
            {this.props.userProfile.boards ? this.props.userProfile.boards.map((board, i) => {
              return   <Link key={i} to={`/${this.props.match.params.userId}/boards/${board.id}`}>
                <li  className="board-item">
                  {board.title}
              </li>
            </Link>;
            }
          )
        : ""}

      </ul>
    </div>
  );

    }
  }
}

export default BoardIndex;
