import React, { useState } from 'react'

const TodoForm = (props) => {
    const [task, setTask] = useState('');  
    const createTask = () => {
        props.addNewTask(task);
        setTask('');
    } 
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Task
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input className='form-control' value={task} onChange={e => setTask(e.target.value)} placeholder='Enter your Task' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createTask}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm
