import React from 'react';
import { Redirect, withRouter, Link, NavLink, Route} from 'react-router-dom';
import { fetchSingleUser } from '../../util/user_util';
import BoardIndexContainer from '../boards/board_index_container';
import BoardIndex from '../boards/board_index_container';
import CreateBoardContainer from '../boards/create_board_container';
import SavedPinsContainer from '../pins/saved_pins_container';

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
        <div className="user-info">
        <h3 className="username">{currentUser.username}</h3>
        <div className="follows">
            <Link to={`/${currentUser.username}/followers`}>
              Followers
            </Link>
            <Link to={`/${currentUser.username}/following`}>
              Following
            </Link>
              <img className="pf-pic"
                src="
                https://s-media-cache-ak0.pinimg.com/originals/a0/fc/2f/a0fc2f1be1c4ba1d0288c335f814bfdf.jpg">
              </img>
            </div>
            </div>
            <div className="links">
              <NavLink to=
                {`/${currentUser.username}/boards`}
                activeClassName="boards-link">
                Boards
              </NavLink>
              <NavLink to={`/${currentUser.username}/pins`}
                 activeClassName="pins-link">Pins</NavLink>
             </div>
            <div className="board">

              <Route exact path="/:username" component={ BoardIndexContainer }/>
              <Route exact path ="/:username/boards" component={ BoardIndexContainer }/>
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

export default UserProfile;
