import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={AllBeers} path="/all-beers" />
      <Route exact component={BeerDetail} path="/all-beers/:id" />
      <Route exact component={RandomBeer} path="/random-beer" />
      <Route exact component={NewBeer} path="/new-beer" />
    </Switch>
  </BrowserRouter>
)

export default Router;