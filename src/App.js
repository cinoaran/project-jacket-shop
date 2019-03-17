import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import Footer from './components/Footer';
import Product from './components/Product';
import Customer from './components/Customer';
import Page404 from './components/Page404/Page404'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <React.Fragment>      
        <Navbar /> 
         <div className="container">
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/home" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route path="/card" component = {Card} />
            <Route path="/product/:id" component={Product} />
            <Route path="/customer/:id" component={Customer} />
            <Route component={Page404} />             
          </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

