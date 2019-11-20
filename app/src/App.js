import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/signup'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Landing from './components/Landing'

import './App.css';
import LogForm from './components/LogForm'
function App() {
  return (
    <div className="App">
      {/* <h2>Fish Friends Build Week</h2> */}
      <Dashboard />
      <Switch>
      <LogForm />
          
          <Route exact path="/" component={Landing}/>
          <Route path="/Register" component={Signup} />
          <Route path="/Login" component={Login} />


          <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>

      {/* feel free to move these around however you wish(im just going for functionality) */}
      {/* Hello everyone! this week we will be working on fish friends!  */}

      {/* here is our product: https://docs.google.com/document/d/1Ozyf3g8RX9Rur8l6KFswSJjNF3E-dJ1fR25kX-Nv_4k/edit#heading=h.on2hvskyc3k9 */}
      
      {/* Start with login / signup pages (these will just be forms) and then work on the dashboard
      
      The Dashboard will need a place where we can create new logs, view past ones and also need a place where other
      poeple logs can be seen 
      

      See the above link for the fields you need

      Reach out to spencer if you need anythings
      */}
      <footer>
            <nav className="navBottom">
                <h2>FishFriends</h2>
                <a href="#">Home</a>
                <a href="#">Map</a>
                <a href="/LogForm">Add Catch</a>
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
