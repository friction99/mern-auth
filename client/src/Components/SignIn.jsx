import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function SignUp() {
  const [formData,setformData] = useState({});
  const {loading,error} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
          try{
            dispatch(signInStart());
            e.preventDefault();
            const res = await fetch("/api/auth/signin",{
            method:'POST',
            headers:{
              'Content-Type':"application/json"
            },
            body:JSON.stringify(formData)
            });
            const data =  await res.json();
            if(data.success===false){
              dispatch(signInFailure(data))
            }
            else{
              dispatch(signInSuccess(data));
              navigate("/");
            }
          }catch(error){
            dispatch(signInFailure(error));
          }
  }
  return (
    <div className='p-4 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold mb-2'>SignIn</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <input type='text' placeholder='username' id='username' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}></input>
            <input type='password' placeholder='password' id='password' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}></input>
            <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3' onChange={handleChange}>{loading ? 'Signing user':'SignIn'}</button>
        </form>
        <div className='flex gap-2'>
            <p>Dont have an account?</p>
            <Link to='/signup'> 
                <span className='text-blue-500'>Sign Up</span>
            </Link>
            <p className='text-red-400 font-semibold'>{(error)?error.message:""}</p>
        </div>
    </div>
  )
}

export default SignUp