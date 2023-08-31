import React,{useState} from 'react'

const SignUp = () => {
const [data,setData] =useState({
username:'',
email: '',
mobilenumber:'',
password: '',
confirmpassword: '',

})
const {username,email,password,confirmpassword,mobilenumber}=data;
const changeHandler = e =>
{
    setData({...data,[e.target.name]:[e.target.value]})
}
const submitHandler = e =>{
    e.preventDefault();
    console.log(data)

    /*if(username.length <= 5){
        alert("Username must be at least 5 character");
    }
    else if(password !== confirmpassword){
        alert("confirmpassword does't match");
    }
    else{
        console.log(data)
    }*/
}

  return (
    <div className="Register">
        <center>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Username" name="username" value={username} onChange={changeHandler} style={{padding:"5px",backgroundColor:"skyblue"}}/><br/>
                <input type="email" placeholder="Email" name="email" value={email} onChange={changeHandler}/><br/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" placeholder="ConfirmPassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
                <input type="number" placeholder="MobileNumber" name="mobilenumber" value={mobilenumber} onChange={changeHandler}/><br/>
                {password !== confirmpassword ? <p style={{color:"red"}}>Password does't Match !!!</p>:null}
                <input type="submit"  name="submit"/>
            </form>
        </center>
    </div>
  )
}

export default SignUp