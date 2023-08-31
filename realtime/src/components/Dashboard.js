import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const[data,setData]=useState(false)
  if(data)
  {
      return <Navigate to='/'></Navigate>
  }
  return (
    <div className="dashboard">
        <center>
            <p>Hi This is dashboard Page !!!</p>
            <button onClick={() => setData(true)} className="btn btn-outline-primary">Home</button>
        </center>
    </div>
  )
}

export default Dashboard