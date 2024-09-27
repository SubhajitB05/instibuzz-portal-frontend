"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../../lib/axiosConfig";
import { useRouter } from 'next/navigation';

interface UserData{
  firstName:string;
  lastName:string;
  email:string;
  password:string,
  userType:string;
}
const Signup = () => {
  const router = useRouter(); 

  const [userType, setUserType] = useState(0);

  const [userData, setUserData] = useState<UserData>({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    userType:"NormalUser"
  });

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value});
  }

  const handleUserSignUp = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      axios.post('/signup', userData)
      .then((res)=>{
        toast.success('Signup successful');
        router.push('/verifyotp');
      })
      .catch((err)=>{
        toast.error('Signup failed');
        console.log(err);
      })
      setUserData({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        userType:"NormalUser"
      });
    }
    catch (error) {
      toast.error("Error while signup");
    }
  }
    

  return (
    <div className="lg:w-1/3 md:w-2/3 sm:w-3/4 w-3/4">
      <h1 className="text-center text-5xl mb-7">Signup</h1>
      <div className="flex justify-between mb-5">
        <button className={`w-full p-2 ${userType === 0 &&'bg-red-500'} transition-all`} 
          onClick={()=>{
            setUserType(0);
            setUserData({...userData, userType:"NormalUser"})
          }}>As User</button>
        <button className={`w-full p-2 ${userType === 1 &&'bg-red-500'} transition-all`} 
          onClick={()=>{
            setUserType(1);
            setUserData({...userData, userType:"Manufacturer"})
          }}>As Manufacturer</button>
      </div>
      <form onSubmit={handleUserSignUp}>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            name='firstName'
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            name='lastName'
            value={userData.lastName}
            onChange={handleInputChange}
            required  
          />
        </div>
        <div className="form-group">
          <label>{userType === 0 ? "Email" : "Business Email"}</label>
          <input 
            type="email" 
            name='email'
            value={userData.email}
            onChange={handleInputChange}   
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name='password'
            value={userData.password}
            onChange={handleInputChange} 
            required  
          />
        </div>
        <button type="submit" className="bg-green-600 w-full p-2 mt-2 hover:bg-green-700 transition-all">Signup</button>
      </form>
      <p className="text-center mt-2">Already have an account? <Link href="/login" className="text-pink-500">Login</Link></p>
    </div>
  )
}


export default Signup;