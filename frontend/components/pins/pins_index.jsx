import React from 'react';
import PinIndexItem from './pin_index_item';
import { DotLoader } from 'react-spinners';
class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
      this.props.requestAllPins().then(
        setTimeout(() => this.setState({ loading: false }), 1800));


  }

  render () {
    const { currentUser } = this.props;
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
     else {
       return (
        <div className="all-pins">
          <h1>ALL PINS</h1>
        <ul className="list-of-pins">
          {this.props.pins.map((pin, i) =>
            <PinIndexItem key={i} pin={pin} currentUser={currentUser}/>)}
        </ul>
      </div>

    );
  }

}

  }


export default PinsIndex;
