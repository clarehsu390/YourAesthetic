import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('hello');
    this.props.history.push("/login");


  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
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
      <section>
      <form className='session-form' onSubmit={this.handleSubmit}>
        <h2>Sign up to see more</h2>
        <input
          type='text'
          value={this.state.email}
          placeholder='Email'
          onChange={this.update('email')}
          />
        <input
          type='Password'
          value={this.state.password}
          placeholder='password'
          onChange={this.update('password')}
          />
        {this.renderErrors()}
        <button>Sign Up!</button>
      </form>
      <span>Already a member?</span>
      <button className='login' onClick={this.handleClick}>login</button>
      </section>
    );
  }

}

export default withRouter(SignUp);
