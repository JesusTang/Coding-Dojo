import { useState } from 'react';

let nextId = 0;

export default function Lista() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: nextId++,
        name: name,
        finished: false
      }
    ]);
    setName('')
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    console.log(id)
  }
  const toggleFinishedState = (task_id, checked_status) => {
    const tasksList = [...tasks];
    const task = tasks.find(
      task => task.id === task_id
    );
    task.finished = checked_status;
    setTasks(tasksList);
  }
  return (
    <div>
      <h1>Add a Task:</h1>
      <input value={name} onChange={e => {setName(e.target.value)}}/>
      <button onClick={e => {addTask()}}>Add</button>
      <ul>
        {tasks.map(task => (
        <li key={task.id}>
          {task.name} {' '}
          <input type="checkbox" checked={task.finished} onChange={e => {toggleFinishedState(task.id, e.target.checked)}}/> {' '} 
          <button onClick={e => deleteTask(task.id)}>Delete</button>
        </li> 
        ))}
      </ul>
    </div>
  );
}