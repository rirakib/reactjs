import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count,setCount] = useState(0)

    
    useEffect(()=>{
        document.title = `clicked ( ${count} )`
    },[count])
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Effect