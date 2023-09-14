import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [data,setData] = useState([])
    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"

       let response = await axios.get(url)
        .then((res)=>{
            setData(res.data.splice(1,20))
        })
        .catch()

        
    }
    useEffect(()=>{
        fetchData()
    },[])
    

  return (
    <>
        <h1>Home Page </h1>
        <p>Post list</p>
        <ol >
            {
                data.map((item,ind)=>{
                   return(
                        <li key={ind}>
                            {item.title} <br/>
                            <Link to={"/details/"+item.id}>details</Link>
                        </li>
                   )
                })
            }
            
        </ol>
    </>
  )
}

export default Home