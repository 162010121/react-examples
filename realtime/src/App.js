import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import  './App.css'
import Register from './components/Register';
import Login  from './components/Login';
import './components/Navbar.css';
import  './components/Signup.css';
import './components/Login.css';







const App = (props) => {

      
 
  return (
    <div className='app'>
      <form >
      {<BrowserRouter>
      <Navbar/>
       <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/about" exact Component={About}/>
            <Route path="/dashboard" exact Component={Dashboard}/>
            <Route path="/register" exact Component={Register}/>
            <Route path="/login" exact Component={Login}/>
        </Routes>
  </BrowserRouter>}
      </form>
    </div>
  )
}






export default App