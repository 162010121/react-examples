import React,{useRef,useEffect} from 'react'

const UseRef = () => {
    const data=useRef(null)
    const submitHandler = e =>
    {
      e.preventDefault();
      console.log(data.current.value)
    }
    useEffect(()=>{
        data.current.focus();
    },[])
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <h4>Login</h4>
        <input  ref={data} type="text"  placeholder="Enter Name"/><br/>
        <button>Submit</button>
        </form>
        </center>
    </div>
  )
}

export default UseRef