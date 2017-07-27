import React from 'react';
import { DotLoader } from 'react-spinners';

class SavedPins extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
    this.allPins = this.allPins.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.requestBoards(this.props.currentUser.id).then(
      setTimeout(() => this.setState({ loading: false }), 1800));

  }

  allPins() {
    return this.props.boards.map((board, i) =>
    (board.saved_pins.map((pin, idx) => (
      <li className="saved-pin-item"key={idx}><img src={pin.image_url}></img>
      {pin.name}</li>
      ))));
  }

  render() {
    if (this.state.loading) {
      return (

        <div className='sweet-loading'>
     <DotLoader
       color={'#ff0000'}
       loading={this.state.loading}
     />
    </div>
 );
    }

    return(
      <div className="users-pins">
      <h2 className="saved-pins">Saved Pins</h2>
      <ul className="all-saved-pins">
        {this.allPins()}
      </ul>
      </div>
  );
  }
}

export default SavedPins;
