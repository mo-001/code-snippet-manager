import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/MainPage';
function App(){
  return(
    <div class="App">
    <Header/>
    <MainPage/>
    <Footer/>  
    </div>
  )
}
export default App;
