import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { navbar } from '../components/navbar/navbar';
import { LauchAccount } from '../pages/LauchAccount';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/">
            <LauchAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
