//Packages React
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Packages Tiers
//import {CSSTransition,TransitionGroup} from 'react-transition-group';
//Components layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';
//Components pages
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Page2 from './pages/Page2';
import NoFound from './pages/NoFound';

class App extends Component {

  render() {
    return (
      <Router>
        <Header />
          <Switch Component="div" className="page">
            <Route exact path ="/" component={Home}/>
            <Route path ="/connexion" component={Connexion}/>
            <Route path ="/inscription" component={Inscription}/>
            <Route path ="/page2" component={Page2}/>
            <Route component={NoFound}/>
          </Switch>
          <Footer />
        </Router>
      )
    }
  }

  export default App;
