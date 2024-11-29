'use client'
import React, { useState } from 'react'
import Login from '../_components/loginc/Login'
import EmailLogin from '../_components/loginc/EmailLogin'

const page = () => {
  const [isLoginPage , setIsLoginPage] = useState(true);
  const getValueLogin=()=>{
    setIsLoginPage(false);
  }
  const getValueEmail=()=>{
    setIsLoginPage(true);
  }
  return (
    <>
   <div style={{width:'100%'}}>
   <div className='loginEmail'>
   {isLoginPage?<Login getValue={getValueLogin}/>:<EmailLogin getValue={getValueEmail}/>}
   </div>
   
   </div>
   <style jsx>{`
   .loginEmail{
    display: flex;
    justify-content: center;
    width: 40%;
    margin: 36px auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    border-radius: 8px;
    height: 520px;
   }
   
   @media (max-width: 768px) {
   
   .loginEmail{
   width:95%;
   
   }
   
   
   }
   `}</style>
    </>
  )
}

export default page
