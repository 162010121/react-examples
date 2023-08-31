import React from 'react'
import Header from './component/Header';
import  Home from './component/Home';
import Footer from './component/Footer';
import './component/Upper.css'
import './component/Middle.css'
import './component/Low.css'
import Login from './Login';
import SignUp from './SignUp';


import './App.css';
//Filter the names and arrays based on conditions
const App = () => {
  const arr=["Java","React Js","AWS","Spring boot"]
  const fil=arr.filter(arr=>arr.includes('J'))
  const num=[10,20,30,40,50,60,70]
  const filnum=num.filter(num => num>40)
  return (
    <div>
      <center>
      {
        /*arr.map(
          (value,index)=>  <li key={index}>{value}</li>
        )*/
        //fil.map( name=> <li>{name}</li>)
         }
         {
          // filnum.map(num => <li>{num}</li>)
         }
          <Login />
          <SignUp/>
         </center>
         
    </div>
  )
}

export default App