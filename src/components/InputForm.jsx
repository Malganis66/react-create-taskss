import { useState, useContext } from "react";
import {TaskContext} from '../Context/tsukaiContext'

function InputForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {createTask} = useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("")
    setDesc("")
    return createTask({
      title,
      desc
    })
    
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'  >
      <h1 className="text-2xl mb-3">Create your task</h1>
      <input
        placeholder="write some task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='p-3 w-full mb-2'
      />
      <textarea
        placeholder="write something"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        className='p-3 w-full mb-2'
      ></textarea>
      <button className="bg-indigo-700 px-3 py-1">Save</button>
    </form>
    </div>
  );
}

export default InputForm;
