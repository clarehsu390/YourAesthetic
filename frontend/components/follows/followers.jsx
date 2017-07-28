import React from 'react';
import { withRouter } from 'react-router-dom';

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveSingleUser(this.props.match.params.userId);
  }

  allStudents() {
    return (
      <ul>
        {this.props.students.map((student, i) => {
          return (
            <li className="student" key={i}>
              <span className= "studentName">{student.username}</span>
              <img className="student-image" src={student.image_url}></img>
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
        <h1>Followers</h1>
        {this.allStudents()}
    </div>
  );
  }
}

export default withRouter(Followers);
