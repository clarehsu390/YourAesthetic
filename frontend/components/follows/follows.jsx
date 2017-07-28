import React from 'react';
import { withRouter } from 'react-router-dom';

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


      <ul>
        {this.props.teachers.map((teacher, i) => {
          return (
            <li className="teacher" key={i}>
              <span>{teacher.username}</span>
              <img src={teacher.image_url}></img>
            </li>
          );
        })
      }
      </ul>
    );
}
  render() {
    return (
      <div>
      <h1>Following</h1>
      {this.allTeachers()}
      </div>
    );
  }
}

export default withRouter(Follows);
