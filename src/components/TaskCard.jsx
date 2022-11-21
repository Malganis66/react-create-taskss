import { DiCodeigniter } from "react-icons/di";
import {useContext} from 'react'
import {TaskContext} from '../Context/tsukaiContext'

function TaskCard({task}) {
  const {ridTask} = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-green-300 text-sm">{task.description}</p>
      <button className="text-red-600 mt-3" onClick={() => ridTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
