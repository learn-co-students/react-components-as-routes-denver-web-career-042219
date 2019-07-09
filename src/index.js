import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Messages from './Messages'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

  ReactDOM.render((
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/message" component={Messages} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    </Router>),
    document.getElementById('root')
  );
