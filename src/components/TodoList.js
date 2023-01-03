import React, { useState } from 'react'

const TodoList = ({ todoList, setTodoList }) => {
    const [completedTasks, setCompletedTasks] = useState(0);
    const handleDelete = ({ id, complete }) => {
        const updatedTodo = [...todoList].filter((task) => task.id !== id)
        setTodoList(updatedTodo)
        if (complete === true) {
            setCompletedTasks(completedTasks - 1)
        }
    }
    const handleCompletedTasks = (e, todo) => {
        const updatedTodo = [...todoList].map((task) => {
            if (task.id === todo.id) {
                task.complete = !task.complete
            }
            return task;
        })
        setTodoList(updatedTodo)
        if (e.target.checked === true) {
            setCompletedTasks(completedTasks + 1)
        } else {
            setCompletedTasks(completedTasks - 1)
        }

    }
    return (
        <div>
            {todoList.length === 0 ? <>Looks Like You're absolutely free today!</> : todoList.map((todo, index) => (
                <div key={index}>
                    <input type="checkbox" id="task" name="task" onChange={(e) => handleCompletedTasks(e, todo)} checked={todo.complete} />
                    <label htmlFor="task">{todo.task}</label>
                    <button onClick={() => handleDelete(todo)}>X</button>
                </div>
            )

            )}
            Done: {completedTasks}
        </div>
    )
}

export default TodoList