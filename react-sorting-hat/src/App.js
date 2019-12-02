import React, { Component } from 'react';
import Welcome from './components/Welcome';
import QuizForm from './components/QuizForm';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
                <Route exact path="/" component={Welcome} />
                <Route path="/sorting_quiz" component={QuizForm} />
        </div>
        </Router>
    );
  }
}

export default App;
