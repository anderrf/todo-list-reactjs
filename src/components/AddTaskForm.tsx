import { PlusCircle } from 'phosphor-react'
import styles from './AddTaskForm.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

export function AddTaskForm(){
    const [newTaskText, setNewTaskText] = useState('')

    const isNewTaskEmpty = newTaskText.length < 3

    function handleAddNewTask(event: FormEvent){
        event.preventDefault()
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        const newTaskName = event.target.value
        setNewTaskText(newTaskName)
    }

    return (
        <form 
            className={styles.AddTaskForm}
            onSubmit={handleAddNewTask}
        >
            <input 
                type="text" 
                name="taskName" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskText}
                onChange={handleNewTaskChange}
            />
            <button 
                type="submit"
                disabled={isNewTaskEmpty}
            >
                <span>Criar</span>
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}