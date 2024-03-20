import React from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold mb-2'>SignUp</h1>
        <form className='flex flex-col gap-2'>
            <input type='text' placeholder='Username' id='Username' className='bg-slate-300 p-3 rounded-lg'></input>
            <input type='email' placeholder='email' id='email' className='bg-slate-300 p-3 rounded-lg'></input>
            <input type='password' placeholder='password' id='password' className='bg-slate-300 p-3 rounded-lg'></input>
            <button className='bg-slate-700 text-white rounded-lg p-3'>Sign Up</button>
        </form>
        <div className='flex gap-2'>
            <p>Have an account?</p>
            <Link to='/signin'> 
                <span className='text-blue-500'>Sign In</span>
            </Link>
        </div>
    </div>
  )
}

export default SignUp