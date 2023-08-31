import React, {useEffect,useState}from 'react'

const JsonExampl = () => {
    const [data,setData]=useState([]);
    useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/todos').then
(responce => responce.json()).then(json => console.log(json))

    },[])
  return (
    <div>
       {data.map( item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default JsonExampl