import React, { useState } from "react";

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number:"",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.number.trim()) {
      errors.number = "Mobile Number is required";
    } else if (formData.number.length < 10) {
      errors.number = "Mobile Number must be at least 10 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <center>
      <meta charSet="utf-8"/>
    <form onSubmit={handleSubmit} className="border w-25 mt-5 m-auto p-3"> 
    <h4>Registration:</h4>
      <div class="form-floating mb-3 mt-3" >
       
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />  
         <label for="name">Name</label>
        {errors.name && <span className="error" class="text-danger">{errors.name}</span>}
      </div>

      <div class="form-floating mb-3 mt-3">
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
        <label for="email">Email</label>
        {errors.email && <span className="error" class="text-danger">{errors.email}</span>}
      </div>

      <div class="form-floating mb-3 mt-3">
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        {errors.password && <span className="error" class="text-danger">{errors.password}</span>}
      </div>

      <div class="form-floating mb-3 mt-3">
        <input
          type="password"
          placeholder="Enter ConfirmPassword"
          className="form-control"
          value={formData.confirmPassword}
          onChange
          ={handleChange}
        />
        <label for="confirmPassword">ConfirmPassword</label>
        {errors.confirmPassword && (
          <span className="error" class="text-danger">{errors.confirmPassword}</span>
        )}
      </div>
      <div class="form-floating mb-3 mt-3">
        
        <input
          type="number"
         placeholder="Enter Number"
          className="form-control"
          value={formData.number}
          onChange={handleChange}
        />
        <label for="number">Number</label>
         {errors.number && <span className="error" class="text-danger">{errors.number}</span>}
      </div>
          <div className="mt-3">
      <button type="submit" className="btn btn-outline-primary">Submit</button>
      </div>
    
    </form>
    </center>
  );
};

export default FormValidationExample;
