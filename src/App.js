import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stories from './components/pages/Stories';
import SignUp from './components/pages/SignUp';
import Festivals from './components/pages/Festivals';
import Temples from './components/pages/Temples';

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
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
