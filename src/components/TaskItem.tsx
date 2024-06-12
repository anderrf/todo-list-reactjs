import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Task } from '../App';
import styles from './TaskItem.module.css';

interface taskItemProps{
    task: Task
    onChangeTaskStatus: (taskId: string) => void
    onDeleteTask: (taskId: string) => void
}


export function TaskItem({task, onChangeTaskStatus, onDeleteTask}: taskItemProps){
    const {id, title, done} = task
    
    function handleTaskChangeStatus(){
        setActiveRadioValue(!activeRadioValue)
        onChangeTaskStatus(id)
    }
        
    const [activeRadioValue, setActiveRadioValue] = useState(done)

    function handleDeleteTask(){
        onDeleteTask(id)
    }

    return (
        <div className={styles.taskItem}>
            <div 
                className={activeRadioValue ? styles.radioButtonActive : styles.radioButtonInactive}
                onClick={handleTaskChangeStatus}
            >
                 <div className={styles.innerRadioButton}>
                    <Check size={14}/>
                </div> 
            </div>
            <p>{title}</p>
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
    )
}