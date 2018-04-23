import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Pages
import HomePage from './pages/HomePage'
import Header from './pages/Header';
import ContactPage from './pages/ContactPage'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/ContactPage' component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
