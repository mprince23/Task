import React, { useReducer, useState } from 'react';
import { useNotification } from '../App';

const initialTaskState = {
    tasks: [],
};

const taskReducer = (state, action) => {
    if (action.type === 'ADD_TASK') {
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        };
    } else if (action.type === 'EDIT_TASK') {
        return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            ),
        };
    } else if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        };
    } else {
        return state;
    }
};

const TaskScheduling = () => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const { tasks } = state;
    const { addNotification } = useNotification();
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = () => {
        if (!newTask) return;
        const task = { id: new Date().getTime(), text: newTask };
        dispatch({ type: 'ADD_TASK', payload: task });
        addNotification(`Task "${newTask}" added.`);
        setNewTask('');
    };

    const handleEditTask = (task) => {
        setNewTask(task.text);
        setEditingTask(task);
    };

    const handleSaveTask = () => {
        if (!newTask) return;
        const updatedTask = { ...editingTask, text: newTask };
        dispatch({ type: 'EDIT_TASK', payload: updatedTask });
        addNotification(`Task "${newTask}" updated.`);
        setNewTask('');
        setEditingTask(null);
    };

    const handleDeleteTask = (task) => {
        dispatch({ type: 'DELETE_TASK', payload: task });
        addNotification(`Task "${task.text}" deleted.`);
    };

    return (
        <div className="container col-md-5 mt-5">
            <h2>Task Scheduler</h2>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                {editingTask ? (
                    <button onClick={handleSaveTask} className='btn btn-success mx-3'>Save Task</button>
                ) : (
                    <button onClick={handleAddTask} className='btn btn-primary mx-3'>Add Task</button>
                )}
            </div>
            <div className="task-list">
                <h3>Your Tasks</h3>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.id} className="task">
                            <span>{task.text}</span>
                            <button className='btn btn-primary mx-3' onClick={() => handleEditTask(task)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDeleteTask(task)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No tasks available. Add a task to get started.</p>
                )}
            </div>
        </div>
    );
};

export default TaskScheduling