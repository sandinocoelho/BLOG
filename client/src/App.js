import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import HeaderBlog from './components/HeaderBlog'
import FooterBlog from './components/FooterBlog'
import SidebarBlog from './components/SidebarBlog'
import ContentBlog from './components/ContentBlog'


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
        <SidebarBlog />
        <ContentBlog />
        <FooterBlog />
      </div>
    );
  }
}

export default App;
