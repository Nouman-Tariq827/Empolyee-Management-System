import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

   const authdata =  useContext(AuthContext)
   console.log(authdata.employees)

  return (

    <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
     <div className='bg-gray-400 py-2 px-4 mb-2 flex justify-between rounded'>
        <h2 className=' text-lg font-medium rounded w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium rounded w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium rounded w-1/5'>Active Task</h5>
        <h5 className=' text-lg font-medium rounded w-1/5' >Completed Task</h5> 
        <h5 className=' text-lg font-medium rounded w-1/5' >Failed</h5> 
        
      </div>
        <div className=''>
        {authdata.employees.map(function(elem, index){
       
       return(
        
        elem?.id && (
          <div  key={elem.id}
          className='border-2 py-2 px-4 mb-2 flex justify-between rounded'>
          <h2 className='text-lg font-medium text-red-600 rounded w-1/5'>{elem.firstName} </h2>
          <h3 className='text-lg font-medium text-blue-600 rounded w-1/5'>{elem.taskCount.newTask}</h3>
          <h5 className='text-lg font-medium text-white-600 rounded w-1/5' >{elem.taskCount.active}</h5> 
          <h5 className='text-lg font-medium text-red-600 rounded w-1/5' >{elem.taskCount.completed}</h5> 
          <h5 className='text-lg font-medium text-white-600 rounded w-1/5' >{elem.taskCount.failed}</h5> 
        
        
      </div>
          )

) })}
     
        </div>
    </div>
  );
}

export default AllTask;
