import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function ToDo() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    function handleAdd() {
        setTodos([...todos, { id: uuidv4(), todo }])
        setTodo("")
    }

    function handleChenge(e) {
        setTodo(e.target.value)
    }

    function handleDelete(e, id) {
        const newtodo = todos.filter((item, index) => {
            return item.id !== id
        })
        setTodos(newtodo)
    }

    function handleEdit(e, id) {
        const edittodo = todos.filter((item, index) => {
            return item.id === id
        })
        setTodo(edittodo[0].todo)

        const newtodo = todos.filter((item, index) => {
            return item.id !== id
        })
        setTodos(newtodo)
    }

    return (
        <div className='container mt-4'>
            <div className="todo">
                <h1>Todo List</h1>
            </div>

            <div className="">
                <h4>Your Todo</h4>
                <input type="text" className='w-25' onChange={handleChenge} value={todo} />
                <button className='btn btn-primary ms-4' onClick={handleAdd}>Add</button>
            </div>
            {todos.length === 0 && <p>No Todo</p>}
            {todos.map((item, index) => {
                return <div className="d-flex mt-2 w-25 justify-content-between p-2">
                    <p className='pb-0'>{item.todo}</p>
                    <div className="">
                        <button className='btn btn-primary me-2' onClick={(e) => { handleEdit(e, item.id) }}>Edit</button>
                        <button className='btn btn-danger' onClick={(e) => { handleDelete(e, item.id) }}>Delete</button>
                    </div>
                </div>
            })}

        </div>
    )
}

export default ToDo