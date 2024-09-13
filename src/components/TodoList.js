import { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const handleTaskList = () => {
        return (tasks.length === 0) ? <div>No Task</div> : (tasks?.map(task => <TodoItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />))
    };
    
    const completeTask = (id) => {
        const updatedTasks = tasks.map(task => task.id === id ? {...task, isCompleted : !task.isCompleted}: task);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);

    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));       
        setTasks(filteredTasks);
    };


    const addNewTask = (task) => {
        if(tasks.length === 0){
            const newId = 1
            const newTask = [{id: newId, task: task, isCompleted: false}]
            localStorage.setItem('tasks', JSON.stringify(newTask)); 
            setTasks(newTask); 
        }
        else{
            const newId = tasks?.length + 1;
            const newTask = [...tasks, {id: newId, task: task, isCompleted: false}]
            localStorage.setItem('tasks', JSON.stringify(newTask));    
            setTasks([...tasks, {id: newId, task: task, isCompleted: false}]) 
        }
    }

    return (
        <>
            <h1 className='container'>Your Task</h1>
            <table className="table text-center">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Clear</th>
                    </tr>
                </thead>
                <tbody>
                    {handleTaskList()}
                </tbody>
            </table>
            <TodoForm addNewTask={addNewTask} />

        </>
    )
}

export default TodoList
