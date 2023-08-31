import React, {useState} from 'react'
import { Navigate} from 'react-router-dom';
const Home = () => {
  const [auth,setAuth]=useState(false)
  const [data,setData]=useState(false)
  if(data)
  {
      return <Navigate to="/login"/>
  }
  if(auth)
  {
    return <Navigate to="/register"/>
    
  }
  
  return (
    <div>
        <center>
           <h2>Home Page</h2>
           <button onClick={() => setAuth(true)} className="btn btn-outline-primary w-20">Register</button><br/>
           <button onClick={() => setData(true)} className="btn btn-outline-primary mt-4 w-20px">Login</button>
        </center>
    </div>
    
  )
  
  }
  
export default Home