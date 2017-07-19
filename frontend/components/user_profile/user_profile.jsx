import React from 'react';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.currentUser.id);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <h3>{currentUser.username}</h3>
      
    );

  }
}

export default UserProfile;
