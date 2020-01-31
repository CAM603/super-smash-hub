import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Smash from './components/Smash';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/"
      render={props => {
        return <Home {...props}/>
      }}
      />
      <PrivateRoute 
      exact path="/smash" 
      component={Smash}
      />
    </div>
  );
}

export default App;
