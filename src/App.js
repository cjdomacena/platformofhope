import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Donate from './Pages/Donate';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewsAndEvents from './Pages/NewsAndEvents';

/**
 * This is the top level App component that defines which paths will direct the user to which pages.
 * These paths are mainly used in Nav, so navigation links go to the right pages.
 */
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
