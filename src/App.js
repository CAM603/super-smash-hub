import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import PrivateRoute from './components/PrivateRoute';
import SmashPage from './components/SmashPage';
import Home from './components/Home';

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
        component={SmashPage}
      />
    </div>
  );
}

export default App;
