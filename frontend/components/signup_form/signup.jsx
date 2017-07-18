import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  renderErrors() {
      if (this.props.errors) {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
    }

  render() {
    return (
      <form className='session-form' onSubmit={this.handleSubmit}>
        {this.navLink()}
        <input
          type='text'
          value={this.state.username}
          placeholder='username'
          onChange={this.update('username')}
          />
        <input
          type='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.update('password')}
          />
        {this.renderErrors()}
        <button>Sign Up!</button>
      </form>
    );
  }

}

export default withRouter(SignUp);
