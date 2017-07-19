import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { fetchSingleUser } from '../../util/user_util';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { currentUser } = this.props;
    fetchSingleUser(currentUser.id);
  }

  render() {
    const { currentUser, loggedIn } = this.props;
    if (loggedIn) {
      return (
      <div className='profile'>
      <div className='banner'>
        <h3>{currentUser.username}</h3>

          <section className='follows'>
            <Link to={`/{currentUser.username}/followers`}>
              Followers
            </Link>
            <Link to={`/{currentUser.username}/following`}>
              Following
            </Link>
            <img src="https://s-media-cache-ak0.pinimg.com/originals/a0/fc/2f/a0fc2f1be1c4ba1d0288c335f814bfdf.jpg">
              </img>
          </section>
        </div>

        <div className="boards">
        <section className="boards">
          <Link to={`/${currentUser.username}/boards`}>Board</Link>
        </section>

        <section className="pins">
          <Link to={`/${currentUser.username}/pins`}>Pins</Link>
        </section>
      </div>
    </div>
      );
    }
    // else {
    //   return (
    //     <div></div>
    //   );
    // }

  }
}

export default withRouter(UserProfile);
