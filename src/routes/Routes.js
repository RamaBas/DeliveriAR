import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { signIn } from './../pages/signIn';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>DeliveriAR</h1>
        <hr/>
        <signIn/>
        <Switch>
          <Route path="/home">
            <h2>Welcome to Login</h2>
          </Route>
          <Route path="/contact">
            <h2>Welcome to </h2>
          </Route>
          <Route path="/prueba">
            <h2>Pruebaca</h2>
          </Route>
          <Route path="/">
            <signIn/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
