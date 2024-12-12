import React from 'react';

const header = () => {
  
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
   
       <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello, <br /> <span className='text-3xl font-semibold'>username</span></h1>
      <button onClick={logOutUser}
       className='bg-red-600 text-white text-lg font-medium rounded-sm px-5 py-2'>Log Out</button>
    </div>
  
  );
}

export default header;
