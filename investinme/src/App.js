import './App.css';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navbar from './pages/Navbar';
import Registration from '.pages/Registration'

function App() {
  return (
    <Router>
      <div className="App">    
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home"> 
            <Navbar/>
            <HomePage/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
          <Route path="/*">
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </Router>
      
  );
}

export default App;