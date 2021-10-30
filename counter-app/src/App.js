import './App.css';
import Button from './button.js';

<<<<<<< HEAD
import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state= {
    count: 0
  };
}
// Main Solution
incrementCount = () => {
  this.setState({
    count: this.state.count + 1
  });
}
decrementCount = () => {
  this.setState({
    count: this.state.count - 1
  });
}

render() {
  let { count } = this.state
    return (
      <div>
      <h1>Count: { count } </h1>
      <Button
        title = { "-" }
        task = { () => this.decrementCount() }
      />
      <Button
        title = { "+" }
        task = { () => this.incrementCount() }
      />
      </div>
    );
  }
=======
function App() {
  return (
    <div className="App">
      
    </div>
  );
>>>>>>> e811351528233adb8e7cee8305e084ee47c0ccd3
}

