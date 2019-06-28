import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}
const activeLink = {
    background: 'darkblue',
}

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const NavBar = () => {
  return <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={activeLink}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={activeLink}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={activeLink}
    >Login</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={activeLink}
    >Sign Up</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={activeLink}
    >Messages</NavLink>
  </div>
}

const SignUp = () => <div>Sign up!</div>
const Messages = () => <div>Messages!</div>

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
