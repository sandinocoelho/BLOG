import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import HeaderBlog from './components/HeaderBlog'

class App extends Component {
  constructor(props){
    super(props)

      axios
        .get('/postagens')
        .then(resultado => {
          console.log(resultado)
        })

      axios
        .get('/comentarios/teste')
        .then(resultado => {
          console.log(resultado)
      })

  }
  render() {  
  return (
    <div className="App">
      <HeaderBlog />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>  
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      
    </div>
  );
}
}
export default App;
