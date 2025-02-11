import React, { useState } from 'react';
import { createTask } from '../services/TaskService'; // Correct import
import './AddTask.css'; 

const AddTask = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask({ title, completed: false });
        setTitle('');
        onTaskAdded();
    };

    return (
        <div className="add-task">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
        </div>
    );
};

export default AddTask;