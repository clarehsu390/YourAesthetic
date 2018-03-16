import React from 'react';
import { Redirect, withRouter, Link, NavLink, Route} from 'react-router-dom';

import BoardIndexContainer from '../boards/board_index_container';
import BoardIndex from '../boards/board_index_container';
import CreateBoardContainer from '../boards/create_board_container';
import SavedPinsContainer from '../pins/saved_pins_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teacher_id: parseInt(this.props.match.params.userId),
      student_id: this.props.currentUser.id
    };
    this.followButton = this.followButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.receiveSingleUser(this.props.match.params.userId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.userId !== nextProps.match.params.userId) {
  //     this.props.receiveSingleUser(nextProps.match.params.userId);
  //   }
  // }

  followButton() {
    if (this.props.match.params.userId === this.props.currentUser.id) {
      return <div></div>;
    }
    else {

    return <button className="follow-button" onClick={this.handleClick}>{this.props.userProfile.followed ? "Followed" : "Follow!"}</button>;
    }

  }

  handleClick() {
    if (this.props.userProfile.followed) {
      this.props.removeTeacher(this.state);
      console.log(this.state);
    }
    else {
      this.props.createTeacher(this.state);
    }
  }

  render() {
    const { currentUser, loggedIn } = this.props;
    if (loggedIn) {
      return (
      <div className='profile'>
        <div className="user-profile">
        <h3 className="username">{this.props.userProfile.username}</h3>
        <div className="follow-container">
        <div className="follows">
            <Link to={`/${this.props.match.params.userId}/followers`}>
              Followers
            </Link>
            <span>{this.props.userProfile.students.length}</span>
          </div>
            <div className="following">
            <Link to={`/${this.props.match.params.userId}/following`}>
              Following
            </Link>
            <span>{this.props.userProfile.teachers.length}</span>
            </div>
            </div>
            <div className="more-info">
              <img className="pf-pic"
                src={this.props.userProfile.image_url}>
              </img>
              
              {this.followButton()}
              </div>
            </div>
            <div className="links">
              <NavLink to=
                {`/${this.props.match.params.userId}/boards`}
                activeClassName="boards-link">
                Boards
              </NavLink>
              <NavLink to={`/${this.props.match.params.userId}/pins`}
                 activeClassName="pins-link">Pins</NavLink>
             </div>
            <div className="board">

              <Route exact path="/:userId" component={ BoardIndexContainer }/>
              <Route exact path ="/:userId/boards" component={ BoardIndexContainer }/>
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
