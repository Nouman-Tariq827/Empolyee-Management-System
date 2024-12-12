import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailledTask from './FailledTask';

const TaskList = ({data}) => {
  return (
    <div id='classlist' className='flex items-center overflow-x-auto gap-5 flex-nowrap justify-start h-[55%] py-5 w-full mt-10'>

      {data.tasks.map((elem, index)=>{
       
        if (elem.active){
          return <AcceptTask key={index}  data = {elem} />
        }
        if (elem.newTask){
          return <NewTask key={index} data = {elem} />
        }
        if (elem.completed){
          return <CompleteTask key={index} data = {elem} />
        }
        if (elem.failed){
          return <FailledTask  key={index} data = {elem} />
          
        }
     
      })}

    </div>
  );
}

export default TaskList;
