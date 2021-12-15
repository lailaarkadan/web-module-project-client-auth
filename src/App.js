import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect ,Link} from 'react-router-dom';

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
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='/friends'> Friends List</Link>
        <Link className='link' to='/friends/add'>Add a friend</Link>
        <Link className='link' to='/logout'>Logout</Link>

        </header>

      <Route exact path ="/">
        <Login/>
      </Route>
          
        <Route exact path ="/login">
          <Redirect to="/"/>
          </Route>
          <PrivateRoute path="/friends" component={FriendsList}/>
      
          <Route path ="/friends/add">
        <AddFriend/>
          </Route>
          <Route path ="/logout">
        <Logout/>
          </Route>
          </div>
    </Router>
  );
}

export default App;
