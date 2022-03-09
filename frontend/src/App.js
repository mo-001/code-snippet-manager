import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/MainPage';
import Modal from './components/modal';
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render=()=>{
    return(
      <div class="App">
            <Header/>
            <MainPage/>
            <Footer/>
      </div>
    )
  }
}
