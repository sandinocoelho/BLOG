import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bem vindo ao React</h1>  
      </header>
      <p className="App-intro">
        Para começar, edite <code>src/App.js</code> e salve para recarregar.
      </p>
      
    </div>
  );
}
}
export default App;
