import React from 'react'

const TodoItem = ({ task, deleteTask, completeTask }) => {
    const handleDelete = () => {
        deleteTask(task.id);
    }

    const toggleCompleteStatus = () => {
        completeTask(task.id);
    }

    return (
        <tr key={task.id}>
            <th scope="row" >{task.task}</th>
            <th scope="row" className='complete-container' onClick={toggleCompleteStatus}>{task.isCompleted ? 'Completed' : 'Pending'}</th>
            <th scope="row"><button className='btn btn-danger' onClick={handleDelete}>Delete</button></th>
            
        </tr>
    )
}

export default TodoItem
