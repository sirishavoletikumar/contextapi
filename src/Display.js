import React,{useContext, useState} from 'react'
import {store} from './App'


const Display = () => {
    const[data,setData] = useContext(store)
    const[name,setName] = useState('')
    const submitHandler = e =>{
        e.preventDefault();
        setData([...data,{brandName:name}])
    }
    return (
        <div className="card">
            <div className="card-body">
            {data.map(item=><h3>{item.brandName}</h3>)}
            <form onSubmit={submitHandler}>
              <input type="text" 
                     placeholder="enter your brand"
                     onChange={(e)=>setName(e.target.value)}/>
              <input type="submit" value="Add"/>
            </form>
            </div>
        </div>
    )
}

export default Display
