import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Donate from './Donate';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewsAndEvents from './NewsAndEvents';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/newsandevents" exact component={NewsAndEvents} />
          <Route path="/donate" exact component={Donate} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
