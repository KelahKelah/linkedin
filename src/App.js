import React from 'react';
import './App.css';
import Home from './home/home';
import UserId from './components/userId/userId';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SingleCard from './components/singleCard/singleCard';
import SingleCardUser from './components/singleCardUser/singleCardUser';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/use/:id" component={SingleCardUser} />
          <Route exact path='/'><Home /></Route>
          <Route exact path='/user/:id' component={UserId} />
          <Route exact path='/single' component={SingleCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
