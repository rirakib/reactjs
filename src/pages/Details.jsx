import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Details = () => {

    let {id} = useParams()
    

    const [data,setData] = useState(null)
    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/"+id

       let response = await axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
        .catch()

        
    }
    useEffect(()=>{
        fetchData()
    },[])

    
  if(data){
    return(
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </>
    )
  }else{
    return "no data found"
  }
}

export default Details