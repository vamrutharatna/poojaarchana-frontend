import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stories from './components/pages/Stories';
import Signin from './components/pages/SignIn';
import Festivals from './components/pages/Festivals';
import Temples from './components/pages/Temples';
import Signup from './components/pages/SignUp';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/festivals' component={Festivals} />
          <Route path='/temples' component={Temples} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
