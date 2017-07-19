import React from 'react';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const name = this.props.match.params.userName;
  }

  render() {
    const { currentUser } = this.props;
    return (
      <h3>{currentUser.username}</h3>
    );

  }
}

export default UserProfile;
