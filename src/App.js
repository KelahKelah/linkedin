import React from 'react';
import './App.css';
import Home from './home/home';
import UserId from './components/userId/userId';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SingleCard from './components/singleCard/singleCard';
import SingleCardUser from './components/singleCardUser/singleCardUser';
import Header from './components/header/header';
// import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/use/:id" component={SingleCardUser} />
          <Route exact path='/' component={Home} />
          <Route exact path='/user/:id' component={UserId} />
          <Route exact path='/single' component={SingleCard} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
