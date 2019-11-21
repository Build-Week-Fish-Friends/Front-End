import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Landing from './components/Landing'
import LogForm from './components/LogForm'
import EditLogForm from './components/EditLogForm'
import LogList from './components/LogList'
import AreaCard from './components/AreaCard'
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

          {/* user Logs */}
          <PrivateRoute exact path='/edit-log/:id' component={EditLogForm} />
          <PrivateRoute exact path="/logs/:id" component={LogList}/>

          {/* local logs */}
          <PrivateRoute exact path='/logs/area/:id' component={AreaCard} /> 
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
