import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './Background.css'
import Booking from './component/Booking/Booking';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/LoginPage/Login';

function App() {
  return (
    <div className="bgStyle">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/booking/:imageId'>
            <Booking></Booking>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
