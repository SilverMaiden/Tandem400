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

        <div className="App">
      <video className="myVideo" autoPlay muted loop >
              <source src="/Videos/greathall.mp4"  type="video/mp4" />
            </video>


                <Route exact path="/" component={Welcome} />
                <Route path="/sorting_quiz" component={QuizForm} />
                <Route path="/results" component={Results} />
        </div>
        </Router>
    );
  }
}

export default App;
