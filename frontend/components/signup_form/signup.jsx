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
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  handleDemoClick(e) {
    e.preventDefault();
    const guest = {email: "guest", password: "password"};
    this.props.login(guest);
    this.props.history.push("/");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    return (
      <div className="signup">
        <h4>Sign up to see more</h4>
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
        <button>Sign Up!</button>
        <button onClick={this.handleDemoClick}>Demo</button>
      </form>
      <span>Already a member?</span>
      <button className='login' onClick={this.handleClick}>Log In</button>

    </div>
    );
  }

}

export default withRouter(SignUp);
