import React, { Component } from 'react';
import Welcome from './components/Welcome';
import QuizForm from './components/QuizForm';
import Results from './components/Results';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <video autoPlay muted loop >
              <source src="/Videos/greathall.mp4" id="myVideo" type="video/mp4" />
            </video>

        <div className="App">

                <Route exact path="/" component={Welcome} />
                <Route path="/sorting_quiz" component={QuizForm} />
                <Route path="/results" component={Results} />
        </div>
        </Router>
    );
  }
}

export default App;
