import React from 'react'
import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../Context/tsukaiContext'

function ShowData() {
  const {Tasks} = useContext(TaskContext)

    if(Tasks.length === 0) return <h1>There're no tasks</h1>
    return (
      <div className='grid grid-cols-4 gap-2'>
      {Tasks.map(task=>{
          return <TaskCard key={task.id} task={task} />
        })}
      </div> 
    );
}

export default ShowData