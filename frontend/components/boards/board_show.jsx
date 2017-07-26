import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      waiting: true
    };
  }

  componentDidMount() {
    this.props.requestSingleBoard(this.props.match.params.boardId).then(
      () => this.setState({waiting: false})
    );
  }



  render() {
    if (this.state.waiting) {
      return <div></div>;
    }
    return (
      <div className="boards-pins">
      <h2>{this.props.boards.title}</h2>
      {this.props.boards.pins.map((pin,i) => {
        return <li key={i} className="board-pin">
          <img src={pin.image_url}></img>
          <span>{pin.name}</span>
        </li>;
      }
    )}
    </div>
  );

    }
  }


export default withRouter(BoardShow);
