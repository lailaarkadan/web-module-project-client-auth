import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (

    <Router>
      <div className="App">
        <header>
          <h2>Friends</h2>

          <Link className='link' to='/'>Login</Link>
          <Link className='link' to='/friends'> Friends List</Link> 
          <Link className='link' to='/friends/add'>Add a friend</Link>
          <Link className='link' to='/logout'>Logout</Link>
          
        </header>
        <Switch>
  
          <Route exact path="/login">
          <Login/>
            <Redirect to="/" />
          </Route>

          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/friends/add" component={AddFriend}/>
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;




