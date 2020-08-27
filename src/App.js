import React from 'react';
import './App.css';
import Home from './home/home';
import UserId from './components/userId/userId';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user/:id' component={UserId} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
