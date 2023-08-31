import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const [auth,setAuth]=useState(false)
  if(auth)
  {
    return <Navigate to="/"/>
  }
  return (
    <div>
        <center>
           <p>Hi This is about Page !!!</p>
           <button onClick={() => setAuth(true)} className="btn btn-outline-primary">Home</button>
        </center>
    </div>
  )
}

export default About