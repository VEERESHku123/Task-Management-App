import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleTaskAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTask onTaskAdded={handleTaskAdded} />
            <TaskList />
        </div>
    );
};

export default App;