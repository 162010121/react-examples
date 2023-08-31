import React,{useState} from 'react'
import Data from './city.json'


const SearchFilter = () => {
    const [search,setSearch]=useState('');
  return (
    <div>
        <center>
            <h3>Search the City:</h3>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} style={{textAlign:"center"}}placeholder="Enter City Name"/><br/>
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city=>{
                return <div style={{border:"1px solid black",padding:"10px",margin:"10px",maxWidth:"70%"}}>
                    {city.name}
                </div>
            })}
        </center>
    </div>
  )
}

export default SearchFilter