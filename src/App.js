import React, { createContext, useState } from 'react';
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
import Search from './component/Search/Search';
import SearchIteam from './component/Search/SearchIteam';




export const UserContext = createContext(); 

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="bgStyle">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
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
          <Search path='/searchteam'>
            <SearchIteam></SearchIteam>
          </Search>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
