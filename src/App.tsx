import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { useState } from 'react'
import { EmptyTasks } from './components/EmptyTasks'
import { TaskItem } from './components/TaskItem'
import { v4 as uuidV4} from 'uuid'

export interface Task{
  id: string
  title: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState(new Array<Task>())

  const createdTasks = tasks.length
  const doneTasks = tasks.filter(task => task.done).length

  function addTask(taskName: string){
    const newTask: Task = {
      id: uuidV4(),
      title: taskName,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId: string){
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutDeletedOne)
  }

  function changeTaskStatus(taskId: string){
    console.log(taskId)
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, done: !task.done}
      }
      return task
    })
    setTasks(updatedTasks)
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
          <div className={styles.taskList}>
            {
              tasks.map(task => {
                return <TaskItem 
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask} 
                  onChangeTaskStatus={changeTaskStatus}
                />
              })
            }
          </div> : 
          <EmptyTasks/>
        }
      </main>
    </div>
  )
}

export default App
