import React, { useState } from 'react'
import Header from './Header'

export const Login = () => {
  const [isSignInForm, setIsSignINForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignINForm(!isSignInForm)
  }
  return (
    <div className='font-bold text-red-500'>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg'
          alt='bg-logo'
        />
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          type='text' placeholder='email address'
          className='p-2 my-2 bg-grey-600'
        />
        {!isSignInForm && <input
          type='text' placeholder='full name'
          className='p-2 my-2 bg-grey-600'
        />}
        <input
          type='text'
          placeholder='password'
          className='p-2 my-2'
        />
        <button className='p-2.5 my-2 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? SignUp Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}
