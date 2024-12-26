import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e)=>{
    e.preventDefault();
    
    handleLogin(email, password)

    setEmail('')
    setPassword('')
      
  }
  return (
    
    <div className='flex h-screen w-screen justify-center items-center'> 
      <div className='border-2 border-emerald-600 px-10 py-10 rounded'>
        <form 
        onSubmit={(e)=>{
          submithandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e)=>{
           setEmail(e.target.value)
          }}
          required className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          
          required className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full px-5 py-3 text-xl placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='text-white outline-none border-none bg-emerald-600 rounded-full mt-5 px-9 py-2 text-xl placeholder:text-white'>Login</button>
        </form>
    
      </div>
    </div>
  );
}

export default Login;
