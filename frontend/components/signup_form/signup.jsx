import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    const guest = {username: "guest", password: "password"};
    this.props.login(guest);
    this.props.history.push("/");
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  errors() {
      return (
        <ul className="errors">
          {this.props.errors.map((error, i) => {
            return (
              <li className="error" key={i}>
                {error}
              </li>
            );
          })
        }
        </ul>
      );
  }

  render() {
    return (
      <section className="session">
        <div className="signup">
          <h4>
        <img src="https://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,q_100,w_87/v1501170188/Aesthetic_v7ua52.png"></img>
          </h4>
        <h4>Sign up to discover your aesthetic</h4>
      <form className='session-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.username}
            placeholder='Username'
            onChange={this.update('username')}
            />
        <input
          type='password'
          value={this.state.password}
          placeholder='Password'
          onChange={this.update('password')}
          />
          {this.errors()}
        <button className="sign-up-button">Sign Up!</button>
        <button className="demo"onClick={this.handleDemoClick}>Demo</button>

      </form>

      <span>Already a member?</span>
      <button className='login' onClick={this.handleClick}>Log In</button>
      </div>
      </section>
    );
  }

}

export default withRouter(SignUp);
