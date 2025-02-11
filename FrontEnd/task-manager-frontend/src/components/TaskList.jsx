import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/TaskService'; 
import './TaskList.css'; 

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleToggleComplete = async (task) => {
        const updatedTask = { ...task, completed: !task.completed };
        await updateTask(task.id, updatedTask);
        fetchTasks();
    };

    return (
        <div className='task-list'>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            onClick={() => handleToggleComplete(task)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;