"use client";

import Link from "next/link";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

interface LoginData{
  email:string;
  password:string;
  isNormalUser:boolean;
}

const Login = () => {
  const [userType, setUserType] = useState(0);
  const [loginData, setLoginData] = useState<LoginData>({
    email:"",
    password:"",
    isNormalUser:true,
  })

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({...loginData, [name]:value});
  }

  const handleUserLogin = ()=>{
    // post request for login 
  }


  return (
    <div className="lg:w-1/3 md:w-2/3 sm:w-3/4 w-3/4">
      <h1 className="text-center text-5xl mb-7">Login</h1>
      <div className="flex justify-between mb-5">
        <button className={`w-full p-2 ${userType === 0 &&'bg-red-500'} transition-all`} 
          onClick={()=>{
            setUserType(0);
            setLoginData({...loginData, isNormalUser:true});
          }}>As User</button>
        <button className={`w-full p-2 ${userType === 1 &&'bg-red-500'} transition-all`} 
          onClick={()=>{
            setUserType(1);
            setLoginData({...loginData, isNormalUser:false});
          }}>As Manufacturer</button>
      </div>
      <form onSubmit={handleUserLogin}>
        
        <div className="form-group">
          <label>{userType === 0 ? "Email" : "Business Email"}</label>
          <input 
            type="email" 
            name='email'
            value={loginData.email}
            onChange={handleInputChange}  
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name='password'
            value={loginData.password}
            onChange={handleInputChange}   
            required
          />
        </div>
        <button type="submit" className="bg-green-600 w-full p-2 mt-2 hover:bg-green-700 transition-all">Login</button>
      </form>
      <p className="text-center mt-2">New to the Portal? <Link href="/signup" className="text-pink-500">Signup</Link></p>
    </div>
  )
}

export default Login;