import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
function SignUp() {
  const [formData,setformData] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleChange = (e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit = async (e) =>{
        try{
            setLoading(true);
            setError(false);
            e.preventDefault();
            const res = await fetch("/api/auth/signup",{
            method:'POST',
            headers:{
              'Content-Type':"application/json"
            },
            body:JSON.stringify(formData)
            });
            const data =  await res.json();
            console.log(data);
            setLoading(false);
            if(data.success===false){
              setError(true);
            }
        }catch{
          setLoading(false);
          setError(true);
        }
  }
  return (
    <div className='p-4 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold mb-2'>SignUp</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <input type='text' placeholder='username' id='username' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}></input>
            <input type='email' placeholder='email' id='email' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}></input>
            <input type='password' placeholder='password' id='password' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}></input>
            <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3' onChange={handleChange}>{loading ? 'Creating User':'SignUp'}</button>
        </form>
        <div className='flex gap-2'>
            <p>Have an account?</p>
            <Link to='/signin'> 
                <span className='text-blue-500'>Sign In</span>
            </Link>
            <p className='text-red-400 font-semibold'>{error && 'Something went wrong'}</p>
        </div>
    </div>
  )
}

export default SignUp