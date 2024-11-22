import React from 'react'
import Login from '../_components/loginc/Login'
import EmailLogin from '../_components/loginc/EmailLogin'

const page = () => {
  return (
    <>
   <div style={{width:'100%'}}>
   <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'40%',margin:'100px auto'}}>
   {false?<Login/>:<EmailLogin/>}
   </div>
   
   </div>
    </>
  )
}

export default page
