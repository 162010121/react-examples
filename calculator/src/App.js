import React ,{useState}from 'react'
import './App.css';
import JsonExampl from './JsonExampl';

const App = () => {
  const [input,setInput] =useState("")
  const [result,setResult]=useState(0);
  const changeHandler = e =>
  {
    setInput(e.target.value)
  }
  return (
   /* <div>
      <center>
           <input type="text" placeholder="Enter A Number"  onChange={changeHandler} value={input} name="input"/><br/><br/>
            <button onClick={() => setResult(eval(input))}>Result</button>
            <h3>Result is :{result}</h3><br/>



            <button onClick={() => setInput(input+1)}>1</button>
            <button onClick={() => setInput(input+2)}>2</button>
            <button onClick={() => setInput(input+3)}>3</button>
            <button onClick={() => setInput(input+4)}>4</button>
            <button onClick={() => setInput(input+5)}>5</button><br/>



            <button onClick={() => setInput(input+6)}>6</button>
            <button onClick={() => setInput(input+7)}>7</button>
            <button onClick={() => setInput(input+8)}>8</button>
            <button onClick={() => setInput(input+9)}>9</button>
            <button onClick={() => setInput(input+0)}>0</button><br/>

            <button onClick={() => setInput(input+'+')}>+</button>
            <button onClick={() => setInput(input+'-')}>-</button>
            <button onClick={() => setInput(input+'/')}>/</button>
            <button onClick={() => setInput(input+'*')}>*</button>
            <button onClick={() => setInput('')}>clear</button>
      </center>
    </div>*/
    <div>
        <JsonExampl/>

    </div>
  )
}

export default App