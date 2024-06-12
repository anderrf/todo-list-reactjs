import styles from './EmptyTasks.module.css'

export function EmptyTasks(){
    return (
        <div className={styles.emptyTasks}>
        <img src="src/assets/clipboard.png" alt="prancheta" />
        <p className={styles.emptyTasksBoldLine}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}