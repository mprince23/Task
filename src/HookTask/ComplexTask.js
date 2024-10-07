import React, { useReducer, useEffect, useRef } from 'react';

const initialState = {
    lists: [
        { id: 1, title: 'Task', tasks: [] },
        { id: 2, title: 'In Progress', tasks: [] },
        { id: 3, title: 'Done', tasks: [] },
    ],
};

const taskReducer = (state, action) => {
    if (action.type === 'ADD_TASK') {
        return {
            ...state,
            lists: state.lists.map((list) =>
                list.id === action.listId
                    ? { ...list, tasks: [...list.tasks, { id: Date.now(), name: action.task }] }
                    : list
            ),
        };
    } else if (action.type === 'MOVE_TASK') {
        const { fromListId, toListId, taskId } = action;
        const taskToMove = state.lists
            .find((list) => list.id === fromListId)
            .tasks.find((task) => task.id === taskId);

        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.id === fromListId) {
                    return { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) };
                }
                if (list.id === toListId) {
                    return { ...list, tasks: [...list.tasks, taskToMove] };
                }
                return list;
            }),
        };
    } else if (action.type === 'SET_STATE') {
        return action.payload;
    }
    return state;
};

const ComplexTask = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const taskInputRefs = useRef({});

    useEffect(() => {
        const savedState = localStorage.getItem('kanbanState');
        if (savedState) {
            dispatch({ type: 'SET_STATE', payload: JSON.parse(savedState) });
        }
    }, []);

    const addTask = (listId) => {
        const task = taskInputRefs.current[listId].value.trim();
        if (task) {
            dispatch({ type: 'ADD_TASK', listId, task });
            taskInputRefs.current[listId].value = '';
        }
    };

    const onDragStart = (e, { taskId, fromListId }) => {
        e.dataTransfer.setData('taskId', taskId);
        e.dataTransfer.setData('fromListId', fromListId);
    };

    const onDrop = (e, toListId) => {
        const taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
        const fromListId = parseInt(e.dataTransfer.getData('fromListId'), 10);

        dispatch({ type: 'MOVE_TASK', fromListId, toListId, taskId });
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="mt-5">
            <div className="d-flex">
                {state.lists.map((list) => (
                    <div
                        key={list.id}
                        className="card"
                        style={{ width: '18rem', margin: '0 10px' }}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, list.id)}
                    >
                        <div className="card-body">
                            <h5 className="card-title">{list.title}</h5>
                            <input
                                type="text"
                                ref={(el) => (taskInputRefs.current[list.id] = el)}
                                className="form-control mb-2"
                                placeholder={`Add Task to ${list.title}`}
                            />
                            <button className="btn btn-primary" onClick={() => addTask(list.id)}>
                                Add Task
                            </button>
                            <ul className="list-group mt-3">
                                {list.tasks.map((task) => (
                                    <li
                                        key={task.id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                        draggable
                                        onDragStart={(e) => onDragStart(e, { taskId: task.id, fromListId: list.id })}
                                    >
                                        {task.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComplexTask;