import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { useState } from 'react'
import { EmptyTasks } from './components/EmptyTasks'

export interface Task{
  title: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState(new Array<Task>())

  const createdTasks = tasks.length
  const doneTasks = tasks.filter(task => task.done).length

  function addTask(taskName: string){
    const newTask: Task = {
      title: taskName,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.content}>
        <AddTaskForm onAddTask={addTask}/>
        <div className={styles.taskStatus}>
          <div className={styles.tasksCounter}>
            <p>Tarefas criadas <span>{createdTasks}</span></p>
          </div>
          <div className={styles.doneTasksCounter}>
            <p>Concluídas <span>{createdTasks ? `${doneTasks} de ${createdTasks}` : 0}</span></p>
          </div>
        </div>
        {
          createdTasks ?
          <div>yes</div> : 
          <EmptyTasks/>
        }
      </main>
    </div>
  )
}

export default App
