import React, { Component } from 'react';
import Welcome from './components/Welcome';
import QuizForm from './components/QuizForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <QuizForm />
      </div>
    );
  }
}

export default App;
