import React from 'react'
import Register from './Register'
const Navbar = () => {
  return (
   
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <form>
        <ul class="nav nav-fill">
          <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="/dashboard">Dashboard</a>
           </li>
           <li class="nav-item">
           <a class="nav-link" href="/about">About</a>
           </li>
           <li class="nav-item">
           <a class="nav-link" href="/register">Register</a>
           </li>
           <li>
           <a class="nav-link" href="/login">Login</a> 
           </li>
        </ul>
      </form>
      </nav>
    </div>
   
  ) 
}

export default Navbar