import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: true
    };
  }

  componentDidMount() {
    this.props.receiveSingleUser(this.props.match.params.userId);
  }


  allTeachers() {
    return (


      <ul className="followers">
        {this.props.teachers.map((teacher, i) => {
          return (
            <Link to={`/${teacher.id}`} key={i}><li className="teacher">
              <span>{teacher.username}</span>
              <img className="teacher-image" src={teacher.image_url}></img>
            </li></Link>
          );
        })
      }
      </ul>
    );
}
  render() {

    return (
      <div className="follow-list">
      <h1>Following</h1>
      {this.allTeachers()}
      </div>
    );
  }
}

export default withRouter(Follows);
