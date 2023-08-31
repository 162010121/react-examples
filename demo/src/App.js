//Class Component

/*import React, { Component } from 'react'
import Discplay from './Discplay'
import './App.css';

export default class extends Component {
  state={
    name:"Java Development Kit With React Js"
  }
    render() {
    return (
      <div className='container'>
          <h1><Discplay name={this.state.name}/></h1>
          <button onClick={() => console.log("clicked")}>Click Here</button>
      </div>
    )
  }
}*/
//Function Component
//Change the Content and numbers
//import React,{useState,useEffect} from 'react'
import './App.css';

/*const App = () => {
 
  const [name,setName] = useState("Telugu Skills Hub");
  const[count,setCount]= useState(0)
  useEffect(() => console.log(count),[count])
  return (
    <div>
     <h1>{name}</h1> 
      <h2>You clicked {count} Times</h2>
      <button onClick={() => setName("Hi Praveen$")}>Change The Name</button>
      <button onClick={() => setCount(count+1)}>Change</button><br/><br/>
      </div>
  )

}
export default App*/

//To Store the user name password in console
import React,{useState} from 'react';

  function App() {
     const [data,setData] = useState({
        username: '',
        password: '',
      })
      const {username,password}=data;
      const onChange = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
      }  
    
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data)
  }
    return(
    <div>
      <center>
      <form onSubmit={submitHandler}>
      <input type="text" name="username" value={username} 
        onChange={onChange} placeholder="username"/><br/>

      <input type="password" name="password" value={password} 
        onChange={onChange} placeholder="Password"></input>
      <br/>
      
      <br/>
      <input type='submit' name="submit"/>
      </form>
      </center>
    </div>
    )
  
  
  }
export default App




