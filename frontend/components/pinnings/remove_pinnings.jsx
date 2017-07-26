import React from 'react';
import { withRouter } from 'react-router-dom';

class removePinnings extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      id: this.props.board.pinnings.id,
      pin_id: this.props.pin
      board_id: this.props.board
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(this.props);
    console.log(this.state);
    this.props.deletePinning(this.state.id);
  }

  componentWillUpdate(){
    this.props.history.push(`/boards/${this.state.board_id}`);
  }


  render() {
    return(

      <div>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

export default withRouter(removePinnings);
