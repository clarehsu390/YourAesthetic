import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleDemoClick(e) {
    e.preventDefault();
    const guest = {email: "guest", password: "password"};
    this.props.login(guest);
    this.props.history.push("/");
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }


  render() {
    return (
      <section className="session">
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
        {this.errors()}
        <button>Login</button>
        <button onClick={this.handleDemoClick}>Demo</button>

      </form>
        <span className="linkto-signup">
          <text>Not on YourAesthetic yet?</text>
          <Link to='/'>Sign Up</Link>
        </span>
        </div>
      </section>
    );
  }

}

export default withRouter(Login);
