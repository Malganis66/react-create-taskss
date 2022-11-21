import { Tasks as data } from "../data";
import {createContext, useState, useEffect} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [Tasks, setTasks] = useState([]);
  const createTask = (task) => {
    setTasks([
      ...Tasks,
      {
        id: Tasks.length,
        title: task.title,
        description: task.desc,
      },
    ]);
  };
  const ridTask = (taskId) => {
    setTasks(Tasks.filter((task) => task.id !== taskId));
  };
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider value={{Tasks, createTask, ridTask}} >
      {props.children}
    </TaskContext.Provider>
  )
}