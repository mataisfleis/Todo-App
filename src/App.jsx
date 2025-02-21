import { useEffect, useState } from 'react'
import { Task } from './components/Task'
import { TaskForm } from './components/TaskForm'
import { getData, saveData } from './storage'

function App () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const localData = getData()
    setTasks(localData ? JSON.parse(localData) : [{ content: 'You can create Notes', completed: true }])
  }, [])

  const [taskFormContent, setTaskFormContent] = useState('')

  const completeTask = (content) => {
    const taskIndex = tasks.findIndex(t => t.content === content)
    const newTask = { ...tasks[taskIndex], completed: !tasks[taskIndex].completed }
    saveData(tasks.filter((t) => t.content !== newTask.content).concat(newTask))
    setTasks(tasks.filter((t) => t.content !== newTask.content).concat(newTask))
  }

  const deleteTask = (content) => {
    const taskIndex = tasks.findIndex(t => t.content === content)
    const newTask = { ...tasks[taskIndex], completed: !tasks[taskIndex].completed }
    setTasks(tasks.filter((t) => t.content !== newTask.content))
    saveData(tasks.filter((t) => t.content !== newTask.content))
  }

  const handleTaskForm = (e) => {
    e.preventDefault()
    const newTask = { content: taskFormContent, completed: false }
    saveData(tasks.concat(newTask))
    setTasks(tasks.concat(newTask))
    setTaskFormContent('')
  }

  return (
    <>
      <main className='container'>
        <h1>To-Do App</h1>
        <TaskForm submitFunc={handleTaskForm} controlFunc={(tfc) => setTaskFormContent(tfc)} taskFormState={taskFormContent} />
        <div className='task-container'>
          {tasks.sort((a, b) => a.completed - b.completed)
            .map(task => (
              <Task key={task.content} task={task} completeTask={completeTask} deleteTask={deleteTask} />
            ))}
        </div>
      </main>
    </>
  )
}

export default App
