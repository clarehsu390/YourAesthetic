import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }
  renderErrors() {
      if (this.props.errors) {
        return(
          <ul>
            {this.props.errors.map((error, idx) => (
              <li key={idx}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>New User?</Link>;
    }
    else {
      return <Link to='/login'>Login</Link>;
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
        <button>Submit</button>
      </form>
    );
  }

}

export default withRouter(SessionForm);
