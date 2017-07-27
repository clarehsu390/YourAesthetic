import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.props.clearErrors();
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
    const guest = {username: "guest", password: "password"};
    this.props.login(guest);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      return (
        <ul>
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
        <div className="login">
        <h4>
          <img src="http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,q_100,w_87/v1501170188/Aesthetic_v7ua52.png"></img>
        </h4>
        <h4 className="login-title">Log in to see more</h4>
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
        <button>Login</button>
        <button className="demo"onClick={this.handleDemoClick}>Demo</button>

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
