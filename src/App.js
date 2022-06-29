import './App.css';
import React from "react";
import UserPost1 from './components/UserPost/UserPost';
import Detail from './pages/Detail'

import Navbar from './components/Navbar/Navbar';
import About  from './pages/About';
import User from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// const BASE_URL = 'https://dummyapi.io/data/v1'
// const key = '618479acc2ef5ba8018516ac'

function App ()  {


  return(
    <Router>
    <div>
        <Navbar />
        <Switch>
          <Route path="/about"  component={About} />
          <Route path="/user"  component={User} />
          <Route path="/detail/:id"  component={Detail} />
          <UserPost1 />
        </Switch>
    </div>
    </Router>
  )
  
}
export default App;

