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
              <span>{student.username}</span>
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
        {this.allStudents()}
    </div>
  );
  }
}

export default withRouter(Followers);
