import React, { createContext, useState } from 'react'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'
import Count from './Count'
import Display from './Display'

 export const store = createContext()
const App = () => {
  const[data,setData] = useState([
    {
      brandName:"Nokia",

    },
    {
      brandName:"Lg"
    },
    {
      brandName:"Htc"
    }
  ])
  return (
    <div>
      <store.Provider value={[data,setData]}>
      <center>
      <Count/>
      <Display/>
      {/* <button onClick={() =>setData(data+1)} >Increment</button> */}
      </center>
      </store.Provider>
    </div>
  )
}
export default App
