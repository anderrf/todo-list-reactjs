import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.content}>
        <AddTaskForm/>
      </main>
    </div>
  )
}

export default App
