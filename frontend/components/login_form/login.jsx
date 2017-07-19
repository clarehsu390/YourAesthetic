import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
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


  render() {
    return (
      <div className="login">
        <h4>Your Aesthetic</h4>
        <h4>Log in to see more</h4>
      <form className='session-form' onSubmit={this.handleSubmit}>

        <input
          type='text'
          value={this.state.email}
          placeholder='Email'
          onChange={this.update('email')}
          />
        <input
          type='password'
          value={this.state.password}
          placeholder='Password'
          onChange={this.update('password')}
          />
        {this.renderErrors()}
        <button className='auth'>Login</button>
        <button className='auth'>Demo</button>
      </form>
        <span className="linkto-signup">
          <text>Not on YourAesthetic yet?</text>
          <Link to='/signup'>Sign Up</Link>
        </span>
      </div>
    );
  }

}

export default withRouter(SessionForm);
