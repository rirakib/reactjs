import React, { useState } from 'react'

const Registration = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    
    const handleInputChange = (event) => {
        const {id,value} = event.target
        
        if('username' == id){
            setUserName(value)
        }

        if('email' == id){
            setEmail(value)
        }

        if('mobile' == id){
            setMobile(value)
        }
    }

    const formHandle = (event) => {
        event.preventDefault();
        console.log(username,email,mobile)
    }
  return (
    <>
        <h1>Registration Form</h1>
        <form onSubmit={(event)=>formHandle(event)}>
            <input type="text" id='username' value={username} onChange={(e)=>handleInputChange(e)} placeholder='username' /><br/>
            <input type="email" id='email' value={email} onChange={(e)=>handleInputChange(e)} placeholder='email' /><br/>
            <input type="number" id='mobile' value={mobile} onChange={(e)=>handleInputChange(e)}  placeholder='mobile' /><br/>
            <input type="submit"  />
        </form>
    </>
  )
}

export default Registration