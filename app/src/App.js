import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Landing from './components/Landing'
import LogForm from './components/LogForm'
import Navbar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

          
          <Route exact path="/" component={Landing}/>
          <Route path="/Register" component={Signup} />
          <Route path="/Login" component={Login} />


          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add" component={LogForm} />
        
      </Switch>

      <footer>
        <nav className="navBottom">
          <nav className="nav">
              <a href="/dashboard">Dashboard</a>
              {/* <a href="#">Map</a> */}
              <a href="/add">New Log </a>
              <a href="/">Logout</a>
        </nav>
              </nav>
            <span>
                {/* social media icons here */}
                <copyright>2019 FishFriends</copyright>
            </span>

        </footer>
    </div>

    
  );
}

export default App;
