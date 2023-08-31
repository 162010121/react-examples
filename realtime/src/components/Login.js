import React, {useState} from 'react'
import './Login.css';



export const Login = () => {

  
    const [data,setData]=useState
    ({
        email:'',
        password:'',
       
    })
    const {email,password}=data;

    const changeHandler = e =>
    {
        setData({...data,[e.target.name]:[e.target.value]})
    }
   
   
    
   /*const handleClick =(e)=>
   {
    e.preventDefault()
    const employee=(email,password)
    console.log(employee)
    fetch("http://localhost:2000/employee/v1/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(employee)

    }).then(()=>
    {
      console.log("New Employee Added")
    })*/
    const submitHandler=((e) => {
      // Fetch data from the backend API
      e.preventDefault();
      fetch("http://localhost:2000/employee/v1/add")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
  
  return (
    <div  className="border bg-light w-25 mt-3 m-auto p-5">
        <h4 style={{textAlign:"center"}}>Login</h4><br/>
       <form style={{ textAlign:"center"}} className='login123'>
       <div className="inputBox mt-3">
        <input
          type="email" className="form-control" style={{textAlign:"center"}} name='email' placeholder="Enter Email" class="text-input" value={email} onChange={changeHandler} />
        <label for="email" className="label">Email</label>
      </div>
      <div className="inputBox mt-3">
        <input
          type="password" className="form-control" style={{textAlign:"center"}} name='password' placeholder="Enter Password" class="text-input" value={password} onChange={changeHandler} />
        <label for="password" className="label">Password</label>
      </div>
        <button className='btn btn-outline-primary mt-3' >Login</button><br/>
       </form>
    </div>
  )
}

export default Login