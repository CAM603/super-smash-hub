import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Smash from './components/Smash';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <PrivateRoute path="/smash" component={Smash}/>
    </div>
  );
}

export default App;
