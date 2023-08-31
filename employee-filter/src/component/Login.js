import React,{useState}from 'react'


const Login = () => {
const [data,setData]=useState({
    id:'',
    email:'',
    password:'',
    
  })
  const [sumitted, setSubmitted] = useState(false)
const {email,password,id}=data;
const changeHandler = e=>
{
  setData({...data,[e.target.name]:[e.target.value]})
}

  //const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

const submitHandler = (e) =>{
  e.preventDefault()
}


  

  return (
    <div  > 
      <meta charSet='utf-8'/>
      <form  className="border w-25 mt-3 m-auto p-5 ">
      <h4 className="center">Login Form</h4>
      <div class="form-floating mb-3 mt-3">
      <input type="number" className="form-control"  placeholder="Enter EmployeeId" value={id} onChange={changeHandler} 
      />
      <label for="id">EmployeeId</label>
      </div>
      <div class="form-floating mb-3 mt-3">
      <input type="email" className="form-control"  placeholder="Enter Email" value={email} onChange={changeHandler} 
      />
      <label for="email">Email</label>
      {
            sumitted && data.email===""&& <span className="text-danger">Email MustBe Enter</span>
       }
      </div>

      <div class="form-floating mb-3 mt-3">
      <input type="password" className="form-control"   placeholder="Enter Password"  value={password} onChange={changeHandler}
      />  
      {
                        sumitted && data.password ===""  && <span className="text-danger">Password MustBe Enter</span>
      }
      <label for="password">Password</label>
      </div>

      <button className="btn btn-primary mt-3" onClick={(e) => {
        setSubmitted(true)
      }} onClickCapture={submitHandler}>Add</button>
      </form>
    </div>
  )

  }
export default Login