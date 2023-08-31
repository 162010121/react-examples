import React, { useState } from "react";
import './Signup.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number:"",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <center>
    <form onSubmit={handleSubmit} className="border bg-light w-25 mt-3 m-auto p-5"> 
    <h4>Registration:</h4>
      <div className="inputBox" >
        <input
          type="text" className="form-control" style={{textAlign:"center"}} name ="name" placeholder="Enter Name" class="text-input" value={formData.name} onChange={handleChange} />
        <label for="name" className="label">Name</label>
      </div>
      <div className="inputBox mt-3">
        <input
          type="text" className="form-control" style={{textAlign:"center"}} name="email" placeholder="Enter Email" class="text-input" value={formData.email} onChange={handleChange} />
        <label for="email" className="label">Email</label>
      </div>
      <div className="inputBox mt-3">
        <input
          type="password" className="form-control" style={{textAlign:"center"}}name="password" placeholder="Enter Password" class="text-input" value={formData.password} onChange={handleChange} />
        <label for="password" className="label">Password</label>
      </div>
      <div className="inputBox mt-3">
        <input
          type="password" className="form-control" style={{textAlign:"center"}} name="confirmpasword" placeholder="Re-EnterPasword" class="text-input" value={formData.confirmPassword} onChange={handleChange} />
        <label for="confirmpasword" className="label">ConfirmPassword</label>
      </div>
      <div className="inputBox mt-3">
        <input
          type="number" className="form-control" style={{textAlign:"center"}} name ="number" placeholder="Enter MobileNumber" class="text-input" value={formData.number} onChange={handleChange} />
        <label for="number" className="label">MobileNumber</label>
      </div>
          <div className="mt-3">
      <button className="btn btn-outline-primary">Registration</button>
      </div>
    
    </form>
    </center>
  );
};

export default Register;
